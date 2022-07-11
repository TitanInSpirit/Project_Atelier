import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import Sidebar from './Sidebar.jsx';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props), (this.state = {
      products: [],
      all_styles:  [],
      current_product: {},
      current_style: {},

    });
  }

  componentDidMount = () => {
    this.getAllProducts()
  }

  getAllProducts = () => {
    axios.get('http://localhost:3002/products')
    .then((response) => {
      this.setState({products: response.data, current_product: response.data[0]})
      this.getInfo(response.data[0]['id'])
    })
    .catch((err) => {
      console.log(err)
    })
  }

  setCurrentStyle = (styleId, productId) => {
    styleId = styleId || null;
    productId = productId || null;
    // get current style id
    // get original price
    // get all skus (array of objects)
    // get sale price
    // get all photos
  }

  getInfo = (productId) => {
    let payload = productId
    axios.post('http://localhost:3002/reviews', {productId}).then((res) => {
      let response = res.data
      console.log(`Reviews for Product: ${productId}`)
      console.log(res.data)
      // get total number of reviews
      // get individual ratings
        // do math to find average
      // put all of these in state
    }).catch((err) => {
      console.log('Axios Post Error, ', err)
    })

    axios.post('http://localhost:3002/styles', {productId}).then((res) => {
      let response = res.data
      this.setState({all_styles: res.data.results})
      this.setCurrentStyle(productId)
    }).catch((err) => {
      console.log('Axios Post Error, ', err)
    })
  }

  render() {
    if (this.state.products.length === 0) {
      return (
      <div>
        <div className="loading">
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <ImageGallery current_product={this.state.current_product}/>
          <Sidebar current_product={this.state.current_product}/>
        </div>
      );
    }
  }
}
//
export default Overview;
