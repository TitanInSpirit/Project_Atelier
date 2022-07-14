import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import Sidebar from './Sidebar.jsx';
import axios from 'axios';

const Overview = (props) => {

  if (props.products.length === 0) {
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
      <div className="overview_container">
        <ImageGallery current_product={props.current_product} currentStyle = {props.current_style}/>
        <Sidebar
        products={props.products}
        getAllProducts={props.getAllProducts}
        all_styles={props.all_styles}
        current_product={props.current_product}
        current_style={props.current_style}
        total_reviews={props.total_reviews}
        average_reviews={props.average_reviews}
        setCurrentStyle={props.setCurrentStyle}
        setCurrentSku={props.setCurrentSku}
        currentSku={props.currentSku}
        />
      </div>
    );
  }
}

export default Overview;
