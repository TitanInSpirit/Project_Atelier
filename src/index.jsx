import React from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/Overview.jsx';
import RatingsAndReviews from './components/ratingsAndReviews/RatingsAndReviews.jsx';
import '../public/stylesheets/style.css';
import Questions from './components/questions/Questions.jsx';
import axios from 'axios'

const root = createRoot(document.getElementById('root'));

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      all_styles:  [],
      current_product: {},
      current_style: {},
      total_reviews: 0,
      average_reviews: 0,
    }

  }

  componentDidMount = () => {
    this.getAllProducts()
  }

  getAllProducts = () => {
    axios.get('http://localhost:3001/products')
    .then((response) => {
      this.setState({products: response.data, current_product: response.data[0]})
      this.getInfo(response.data[0]['id'])
      this.getStyles(response.data[0]['id'])
    })
    .catch((err) => {
      console.log(err)
    })
  }

  setCurrentStyle = (styleId, styles) => {
    styleId = styleId || null;
    if (!styleId) {
      styles.map((style) => {
        style['default?'] ? this.setState({current_style: style}) : null
      })
    } else if (styleId) {
      this.state.all_styles.map((style) => {
        style.style_id === styleId ? this.setState({current_style: style}) : null
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

  render() {
    return (
      <div>
        <h1> Header: Hello World!!!!!!</h1>
        <Overview
        products={this.state.products}
        getAllProducts={this.getAllProducts}
        all_styles={this.state.all_styles}
        current_product={this.state.current_product}
        current_style={this.state.current_style}
        total_reviews={this.state.total_reviews}
        average_reviews={this.state.average_reviews}
        setCurrentStyle={this.setCurrentStyle}
        />
        <Questions products={this.state.products} getAllProducts={this.getAllProducts}/>
        <RatingsAndReviews products={this.state.products} getAllProducts={this.getAllProducts}/>
      </div>
    );
  }
};

root.render(<App />);
