import React from 'react';

function ProductInfo(props) {
  return <div className="ProductInfoContainer">
    <span className="overview_product_raiting">Current Rating: {props.average_reviews} Stars </span>
    <div className="product_category_title">
      <span className="Product_category"> Category: {props.current_product.category} </span>
      <div className="Product_title">Title: {props.current_product.name}</div>
    </div>
  </div>;
}

export default ProductInfo;
