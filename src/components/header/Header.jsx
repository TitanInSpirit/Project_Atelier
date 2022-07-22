import React from 'react'
import {useState} from 'react'
import headerLogo from './HeaderLogo.svg'
import axios from 'axios';

function LiveSearch (props) {
  const [returndiv, setReturn] = useState([null])
  if (props.input === 'none' || !props.input || props.input.length === 0) {
    return null;
  } else {
    let productArray = props.products;
    let returnArray = []
    return productArray.map((productObject) => {
      let productName = productObject.name.toLowerCase()
      let category = productObject.category
      let input = props.input.toLowerCase()
      // let photo = null
      if (productName.includes(input)){
        let productId = productObject.id
        console.log('whynot', productId)
        return (
          <div className='livesearch_item' key={productId}>
            <div className='livesearch_product_info'>
              {/* <div className={`livesearch_product_category ${category}`}>{category}</div> */}
              <div className={`livesearch_product_name ${productId}`} onClick={() => {props.setCurrentProduct(productId)}}>{productObject.name}</div>
            </div>
          </div>
        )
      }
    })
  }
}

function Header (props) {
  const [input, setInput] = useState('none')

  const handleChange = (event) => {
    setInput(event.target.value)
    event.preventDefault();
  }



  return (
    <header>
        <div className="header_logo_container">
        <img src={headerLogo} className="header_logo" />
        </div>
        <div className="search_bar_container">
          <input type="search" id="site-search" placeholder="Search . . ." onChange={(e) => {handleChange(e)}}/>
          <div className="search_item_holder">
          <LiveSearch
          input={input}
          products={props.products}
          setCurrentProduct={props.setCurrentProduct}
          setCurrentStyle={props.setCurrentStyle}
          />
          </div>
        </div>
    </header>
  )
}

export default Header;