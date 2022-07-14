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
        return (
        <form className="add_to_cart_container">
          <div className="size_and_quantity_container">
            <select name="select_size" id="sizes" className="overview_button select_size" onChange={props.setCurrentSku}>
              <option value="default" disabled selected >SELECT SIZE</option>
              {sizes.map((size) => {
              return(
                <option value={size.sku} id={size.sku} key={size.sku}>{size.size}</option>
                )
               })}
          </select>
          <select name="select_quantity" id="quantity" className="overview_button select_quantity">
            <option value="default" disabled selected >-</option>
            {availabilityArray.map((quantity) => {
            return(
              <option value={quantity} id={quantity} key={quantity}>{quantity}</option>
              )
          })}
          </select>
          <div className="add_to_cart_favorite_container">
          <button type="submit" className="add_to_cart_btn overview_button">ADD TO BAG</button>
          <button className="overview_favorite_btn overview_button">⭐</button>
          </div>
        </div>

        </form>
        )
    }
}

export default AddToCart;
