import React from 'react';

function ProductInfo(props) {
  const formatRating = () => {
    let str = props.average_reviews.toString();
    let check = Number(str.slice(-1));
    if (check === 5 || check === 0) {
      console.log(props.average_reviews)
      return props.average_reviews;
    } else if (check < 5) {
      console.log(Math.floor(props.average_reviews))
      return Math.floor(props.average_reviews)
    } else {
      console.log(Math.ceil(props.average_reviews))
      return Math.ceil(props.average_reviews)
    }
  }

  return <div className="product_info_container">
    <div class="overview_ratings">
    <div className={`productinfo_rating rating-static rating-${formatRating() * 10}`}></div>
    <p className="overview_review_link"><u>Read All Reviews</u></p>
    </div>
    <div className="product_category_title product_info">
      <span className="product_category product_info"><h2>{props.current_product.category.toUpperCase()}</h2></span>
      <span className="product_title product_info"><h1>{props.current_product.name}</h1></span>
      <div className="price">{props.current_style.sale_price ? <div className="overview_has_sale_price"><h3 className="sale_price" style={{color: 'red'}}>${props.current_style.sale_price }</h3> <h3 className="original_price"><s>${props.current_style.original_price}</s></h3></div>: <span><h3>${props.current_style.original_price}</h3></span>}</div>
    </div>
  </div>;
}

export default ProductInfo;
