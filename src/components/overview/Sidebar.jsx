import React from 'react';
import AddToCart from './sidebar/AddToCart.jsx';
import ProductInfo from './sidebar/ProductInfo.jsx';
import StyleSelector from './sidebar/StyleSelector.jsx';

function Sidebar(props) {
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
      />
    </div>
  );
}

export default Sidebar;
