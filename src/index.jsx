import React from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/Overview.jsx';
import ProductDescription from './components/product_description/product_description.jsx'
import RatingsAndReviews from './components/ratingsAndReviews/RatingsAndReviews.jsx';
import '../public/stylesheets/style.css';
import Questions from './components/questions/Questions.jsx';
import axios from 'axios';

const root = createRoot(document.getElementById('root'));

class App extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToReviews = React.createRef()
    this.addToCartError = React.createRef()
    this.state = {
      products: [],
      all_styles:  [],
      current_photo_index: 0,
      current_photo: '',
      current_product: {},
      current_style: {},
      current_size: 'default',
      total_reviews: 0,
      average_reviews: 0,
      questions: [],
      expanded: false,
    }
  }

  componentDidMount = () => {
    this.getAllProducts()
  }

  handleExpandedView = (event) => {
    let expanded = this.state.expanded
    !expanded ? this.setState({expanded: true}) : this.setState({expanded: false})
    event.preventDefault();
  }

  handleAddToCart = (event) => {
    let skuArray = event.target[0].value.split(' ')
    let sku = skuArray[0]
    let quantity = event.target[1].value // Quantity
    const configCart = {
      params: {
        sku_id: sku,
        count: quantity
      }
    }

    axios.post('http://localhost:3001/cart', configCart)
    .then((res) => {
      console.log(res)
    })
    event.preventDefault();
  }

  setCurrentPhoto = (photo) => {
    photo = photo || 0
    if (!this.state.current_style){
      return null
    } else if (this.state.current_style.photos) {
      this.setState({current_photo_index: photo, current_photo: this.state.current_style.photos[photo].url})
    }
  }

  scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  getAllProducts = () => {
    axios.get('http://localhost:3001/products')
    .then((response) => {
      this.setState({products: response.data, current_product: response.data[4]})
      this.getInfo(response.data[4]['id'])
      this.getStyles(response.data[4]['id'])
      this.getQuestions(response.data[4].id)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  setCurrentSku = (event) => {
    let size = event.target.value.split(' ')
    console.log(size)
    this.setState({current_sku: size[0], current_size: size[1]})
  }

  setCurrentStyle = (styleId, styles) => {
    styleId = styleId || null;
    if (!styleId) {
      styles.map((style) => {
        let defaultSku = Object.keys(style.skus)[0];
        let defaultPhoto = style.photos[0].url
        style['default?'] ? this.setState({current_style: style, current_sku: defaultSku, current_photo: defaultPhoto}) : null
      })
    } else if (styleId) {
      this.state.all_styles.map((style) => {
        let sku = Object.keys(style.skus)[0];
        style.style_id === styleId ? this.setState({current_style: style, current_sku: sku}) : null
      })
    }
  }

  getStyles = (productId) => {
    return axios.post('http://localhost:3001/styles', {productId})
    .then((results) => {
      this.setCurrentStyle(null, results.data.results)
      this.setState({all_styles: results.data.results})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  getInfo = (productId) => {
    const configReview = {
      params: {
        product_id: productId,
      }
    }

    axios.get('http://localhost:3001/reviews', configReview)
    .then((res) => {
      let response = res.data
      let reviewTotal = 0;
      let increment = response.results.map((review) => {
        reviewTotal+= review.rating
      })
      let average = reviewTotal / response.count
      this.setState({total_reviews: response.count, average_reviews: average})
    })
    .catch((err) => {
      console.log('Axios Post Error, ', err)
    })
  }

  getQuestions = (productId) => {
    axios.get(`http://localhost:3001/questions/${productId}`)
    .then((response) => {
      const sortedQuestions = response.data.results;
      sortedQuestions.sort((a,b) => b.question_helpfulness - a.question_helpfulness)

      this.setState({questions: sortedQuestions});
      })
    .catch(err => `Unable to get questions due to following error: ${console.error(err.message)}`);
}

  render() {
    return (
      <div>
        <h1><img src='https://res.cloudinary.com/dsfj56bcp/image/upload/v1657991216/project_atelier/shop_ihqvtz.png'/> Shoppy McShop Face</h1>
        <Overview
        products={this.state.products}
        getAllProducts={this.getAllProducts}
        all_styles={this.state.all_styles}
        current_product={this.state.current_product}
        current_style={this.state.current_style}
        total_reviews={this.state.total_reviews}
        average_reviews={this.state.average_reviews}
        setCurrentStyle={this.setCurrentStyle}
        setCurrentSku={this.setCurrentSku}
        currentSku={this.state.current_sku}
        reviewsRef={this.scrollToReviews}
        scrollToSection={this.scrollToSection}
        setCurrentPhoto={this.setCurrentPhoto}
        currentPhoto={this.state.current_photo}
        current_size={this.state.current_size}
        handleAddToCart={this.handleAddToCart}
        addToCartError={this.addToCartError}
        currentVertGalIndex={this.state.current_photo_index}
        handleExpandedView={this.handleExpandedView}
        isExpanded={this.state.expanded}
        />
        <ProductDescription current_product={this.state.current_product}/>
        <Questions product={this.state.current_product} getAllProducts={this.getAllProducts} questionsList={this.state.questions}/>
        <RatingsAndReviews
          products={this.state.products}
          getAllProducts={this.getAllProducts}
          reviewsRef={this.scrollToReviews}
          style={this.state.current_style}
        />
      </div>
    );
  }
};

root.render(<App />);
