import React from 'react';

function ProductInfo(props) {
  return <div className="product_info_container">
    <span className="overview_product_raiting product_info"><p>Current Rating: {props.average_reviews} Stars </p></span>
    <div className="product_category_title product_info">
      <span className="product_category product_info"><h2>Category: {props.current_product.category}</h2></span>
      <span className="product_title product_info"><h1>{props.current_product.name}</h1></span>
      <div className="price">{props.current_style.sale_price ? <span><h3 style={{color: 'red'}}>{props.current_style.sale_price }</h3> <s>{props.current_style.original_price}</s></span>: <span>{props.current_style.original_price}</span>}</div>
    </div>
  </div>;
}

export default ProductInfo;
