import {React, useState, useEffect} from 'react';

function AddToCart(props) {
    if(!props.current_style || !props.currentSku) {
      return null;
    } else {
      let skus = props.current_style.skus
      let sizes = []
      let availability = props.current_style.skus[props.currentSku].quantity
      let availabilityArray = [...Array(availability+1).keys()]
      availabilityArray.shift()
        for (const item in skus) {
          let size = skus[item].size
          sizes.push({size:size, sku: item})
        }
        return (<div className="add_to_cart_container">
          <select name="select_size" id="sizes" className="overview_button select_size" onChange={props.setCurrentSku}>
          <option value="default" disabled selected >SELECT SIZE</option>
          {sizes.map((size) => {
          return(
            <option value={size.sku} id={size.sku} key={size.sku}>{size.size}</option>
            )
         })}
        </select>
        <select name="select_size" id="sizes" className="overview_button select_size">
          <option value="default" disabled selected >SELECT QUANTITY</option>
          {availabilityArray.map((quantity) => {
          return(
            <option value={quantity} id={quantity} key={quantity}>{quantity}</option>
            )
         })}
        </select>
        </div>
        )
    }
}

export default AddToCart;
