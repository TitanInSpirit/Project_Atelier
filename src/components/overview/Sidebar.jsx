import React from 'react';
import AddToCart from './sidebar/AddToCart.jsx';
import ProductInfo from './sidebar/ProductInfo.jsx';
import StyleSelector from './sidebar/StyleSelector.jsx';

function Sidebar(props) {
  return (
    <div className={'overview_sidebar'}>
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
    </div>
  );
}

export default Sidebar;
