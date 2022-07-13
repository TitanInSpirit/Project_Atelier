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
      />
    </div>
  );
}

export default Sidebar;
