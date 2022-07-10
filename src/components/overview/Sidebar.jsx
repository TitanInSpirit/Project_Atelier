import React from 'react';
import AddToCart from './sidebar/AddToCart.jsx';
import ProductInfo from './sidebar/ProductInfo.jsx';
import StyleSelector from './sidebar/StyleSelector.jsx';

function Sidebar(props) {
  return (
    <div className={'overview_sidebar'}>
      <form onSubmit={props.testRequestHandler}>
        <input type='text'></input>
        <button type='Submit'>Submit</button>
      </form>
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
    </div>
  );
}

export default Sidebar;
