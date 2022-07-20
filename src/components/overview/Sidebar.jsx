import React from 'react';
import AddToCart from './sidebar/AddToCart.jsx';
import ProductInfo from './sidebar/ProductInfo.jsx';
import StyleSelector from './sidebar/StyleSelector.jsx';

function Sidebar(props) {
  if (props.isExpanded) {
    return null
  } else {
  return (
      <div className={'overview_sidebar'}>
        <ProductInfo
          products={props.products}
          getAllProducts={props.getAllProducts}
          all_styles={props.all_styles}
          current_product={props.current_product}
          current_style={props.current_style}
          total_reviews={props.total_reviews}
          average_reviews={props.average_reviews}
          scrollToReviews={props.scrollToReviews}
          reviewsRef={props.reviewsRef}
          scrollToSection={props.scrollToSection}
          />
        <StyleSelector
          products={props.products}
          getAllProducts={props.getAllProducts}
          all_styles={props.all_styles}
          current_product={props.current_product}
          current_style={props.current_style}
          total_reviews={props.total_reviews}
          average_reviews={props.average_reviews}
          setCurrentStyle={props.setCurrentStyle}
          />
        <AddToCart
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
          currentPhoto={props.currentPhoto}
          current_size={props.current_size}
          handleAddToCart={props.handleAddToCart}
          addToCartError={props.addToCartError}
        />
      </div>
    );
  }
}

export default Sidebar;
