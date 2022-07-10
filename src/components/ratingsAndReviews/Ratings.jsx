import React from 'react';
import RatingBar from './RatingBar.jsx'


const Ratings = () => {
  return (
    <div>
      <h3>3.5 <span className='rating-star star-inline rating-static rating-25'></span> </h3>
      <small>100% of reviews recommend this product</small>
      <div className='ratingChart'>
        <RatingBar level='5'/>
        <RatingBar level='4'/>
        <RatingBar level='3'/>
        <RatingBar level='2'/>
        <RatingBar level='1'/>

      </div>
      <div className='ratingDetail'></div>
    </div>
  )
}

export default Ratings;