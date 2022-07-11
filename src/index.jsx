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
      products: []
    }

  }

  componentDidMount = () => {
    this.getAllProducts()
  }

  getAllProducts = () => {
    axios.get('http://localhost:3002/products')
    .then((response) => {
      this.setState({products: response.data})
      console.log(JSON.stringify(this.state.products[0]))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h1> Header: Hello World!!!!!!</h1>
        <Overview products={this.state.products} getAllProducts={this.getAllProducts}/>
        <Questions products={this.state.products} getAllProducts={this.getAllProducts}/>
        <RatingsAndReviews products={this.state.products} getAllProducts={this.getAllProducts}/>
      </div>
    );
  }
};

root.render(<App />);
