import {React, useState} from 'react';

function SelectQuantity(props) {
  if(!props.currentSku) {
    return null;
  } else {
    let availability = props.current_style.skus[props.currentSku].quantity
    let availableArray = [...Array(availability).keys()]
    availableArray.shift()
    return(
      availableArray.map((quantity) => {
        return (
        <option value={quantity} id={quantity} key={quantity}>{quantity}</option>
        )
      })
    )
  }
}

function SelectSize(props) {
  if(!props.current_style) {
    return null;
  } else {
    let skus = props.current_style.skus
    let sizes = []
      for (const item in skus) {
        let size = skus[item].size
        sizes.push({size:size, sku: item})
      }
      return (
       sizes.map((size) => {
        return(
          <option value={size.sku} id={size.sku} key={size.sku}>{size.size}</option>
          )
       })
      )
  }
}

function AddToCart(props) {
  const [size, setSize] = useState()

  function setSelectedSize(event) {
    setSize(event.target.value)
    event.preventDefault();
  }

  return <div className="add_to_cart_container">
    <select name="select_size" id="sizes" className="overview_button select_size" onChange={setSelectedSize}>
    <option value="" disabled selected >SELECT SIZE</option>
    <SelectSize
      setSelectedSize={setSelectedSize}
      products={props.products}
      getAllProducts={props.getAllProducts}
      all_styles={props.all_styles}
      current_product={props.current_product}
      current_style={props.current_style}
      total_reviews={props.total_reviews}
      average_reviews={props.average_reviews}
      setCurrentStyle={props.setCurrentStyle}
    />
    </select>
    <select name="select_quantity" className="overview_button select_size" id="quantities">
    <option value="" disabled selected >SELECT QUANTITY</option>
    <SelectQuantity
      products={props.products}
      getAllProducts={props.getAllProducts}
      all_styles={props.all_styles}
      current_product={props.current_product}
      current_style={props.current_style}
      total_reviews={props.total_reviews}
      average_reviews={props.average_reviews}
      setCurrentStyle={props.setCurrentStyle}
      currentSku={size}
    />
    </select>
  </div>;
}

export default AddToCart;
