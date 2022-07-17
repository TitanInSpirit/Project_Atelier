import {React, useState, useEffect} from 'react';
import {FaFacebook, FaTwitter, FaPinterest} from 'react-icons/Fa'
import {AiOutlineStar} from 'react-icons/Ai'

function AddToCart(props) {
    if(!props.current_style || !props.currentSku) {
      return null;
    } else {
      let skus = props.current_style.skus
      let sizes = []
      let availability = props.current_style.skus[props.currentSku].quantity
      let availabilityArray = [...Array(availability+1).keys()]
      availabilityArray.shift()
      availabilityArray.length > 15 ?  availabilityArray.length = 15 : null
        for (const item in skus) {
          let size = skus[item].size
          sizes.push({size:size, sku: item})
        }
        return (
        <form className="add_to_cart_container">
          <div className="size_and_quantity_container">
            <select name="select_size" id="sizes" className="overview_button select_size" onChange={props.setCurrentSku}>
              <option value="default" disabled selected >SELECT SIZE</option>
              {sizes.length === 0 ? <option value='OOS'id="OOS" key='OOS' disabled selected>'OUT OF STOCK</option> : sizes.map((size) => {
              return(
                <option value={size.sku} id={size.sku} key={size.sku}>{size.size}</option>
                )
               })}
          </select>
          <select name="select_quantity" id="quantity" className="overview_button select_quantity">
            <option value="default" disabled selected >-</option>
            {availabilityArray.length === 0 ? <option value='OOS'id="OOS" key='OOS' disabled selected>'OUT OF STOCK</option> : availabilityArray.map((quantity) => {
            return(
              <option value={quantity} id={quantity} key={quantity}>{quantity}</option>
              )
          })}
          </select>
          <div className="add_to_cart_favorite_container">
          <button type="submit" className="add_to_cart_btn overview_button">ADD TO BAG</button>
          <button className="overview_favorite_btn overview_button">
            <AiOutlineStar className='favorite_star' />
          </button>
          </div>
        </div>
        <div className="social_share_container">
          <FaFacebook className="share_icon facebook" onClick={() => {
            location.href=`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}%2F&amp;src=sdkpreparse`}
            }/>
          <FaTwitter className="share_icon twitter" onClick={() => {
            location.href=`https://twitter.com/intent/tweet?text=Check%20out%20these%20sick%20${props.current_product.category}%20from%20${window.location.href}`
            }
          }/>
          <FaPinterest className="share_icon pinterest" onClick={() => {
              location.href=`http://pinterest.com/pin/create/button/?url=${window.location.href}&media=${props.currentPhoto}&description=${props.current_product.description}`
            }
          }/>
        </div>
        </form>
        )
    }
}

export default AddToCart;
