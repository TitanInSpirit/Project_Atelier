import React, {useState, useEffect} from 'react';
import RatingBar from './RatingBar.jsx'


const Ratings = ({rating, handleFilterRating}) => {
  let aveRating = 0;

  const calAveRating = () => {
    let sum = 0;
    let keySum = 0;
    for (let key in rating.ratings) {
      sum += key * Number(rating.ratings[key]);
      keySum += Number(key);
    }
    aveRating = (sum / keySum).toFixed(1)
    return aveRating;
  }

  // useEffect(() => {
  //   if(Object.keys(rating).length > 0) {
  //     calAveRating()
  //   }
  // },[rating])

  const formatRating = () => {
    let str = aveRating.toString();
    let check = Number(str.slice(-1));
    if (check === 5 || check === 0) {
      return aveRating;
    } else if (check < 5) {
      return Math.floor(aveRating)
    } else {
      return Math.ceil(aveRating)
    }
  }

  return (
    <div>
      {/* {console.log(rating)} */}
      <div className = 'ratingSum'>
        <h3 className='ratingScore'>{Object.keys(rating).length > 0 && calAveRating()}
        <p className={`ratingAveStar rating-static rating-${formatRating() * 10}`}></p>
        </h3>

      </div>
      <small>100% of reviews recommend this product</small>
      <div className='ratingChart'>
        <RatingBar level='5' ratings = {rating.ratings} handleFilterRating={handleFilterRating}/>
        <RatingBar level='4' ratings = {rating.ratings} handleFilterRating={handleFilterRating}/>
        <RatingBar level='3' ratings = {rating.ratings} handleFilterRating={handleFilterRating}/>
        <RatingBar level='2' ratings = {rating.ratings} handleFilterRating={handleFilterRating}/>
        <RatingBar level='1' ratings = {rating.ratings} handleFilterRating={handleFilterRating}/>

      </div>
      <div className='ratingDetail'></div>
    </div>
  )
}

export default Ratings;