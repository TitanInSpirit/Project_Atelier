import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

function Styles(props) {
  let styles = props.all_styles;
  if (!styles.length) {
    return null;
  } else {
    return styles.map((style) => {
      let photo = style.photos[0].thumbnail_url;
      let id = style.style_id;
      return (
        <div key={id}>
          {props.current_style.style_id === id ? (
            <BsCheckCircle className='selected_check' />
          ) : null}
          <div key={id} className='style'>
            <img
              onClick={() => {
                props.setCurrentStyle(id);
              }}
              className='style_image'
              id={id}
              src={photo}></img>
          </div>
        </div>
      );
    });
  }
}
function StyleSelector(props) {
  return (
    <div>
      <h2>
        <b>STYLE ></b> {props.current_style.name}
      </h2>
      <div className='style_selector_container'>
        <Styles
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
    </div>
  );
}

export default StyleSelector;
