import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'

function ProductDescription (props) {
  let productSlogan = props.current_product.slogan;
  let productDescription = props.current_product.description;
  if (!productSlogan || !productDescription) {
    return null;
  } else {
  return (
    <div className='product_description_container_parent'>
      <div className='product_description_container'>
        <h1 className='product_slogan'>{productSlogan}</h1>
        <p className='product_description'>{productDescription}</p>
      </div>
      <div className='vertical_divider'></div>
      <div>
        <ul className='ul_product_desc'>
          <li><AiOutlineCheck /> GMO and Pesticide-free</li>
          <li><AiOutlineCheck /> Made with 100% Genetic Modification</li>
          <li><AiOutlineCheck /> This is made up</li>
        </ul>
      </div>
    </div>
    )
  }
}

export default ProductDescription;