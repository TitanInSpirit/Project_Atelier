import React, {useState, useEffect} from 'react';
import RatingBar from './RatingBar.jsx'


const Ratings = ({rating, handleFilterRating, rateArr}) => {
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
      <p>Rating Breakdown</p>
      <div className='ratingLabelContainer'>
        {rateArr && rateArr.map((rate, i) => {
          if(rate === '1') {
            return <div key={i} className='ratingLabel'>{rate} star</div>
          }
          return <div key={i} className='ratingLabel'>{rate} stars</div>
        })}
        {rateArr.length > 0 && <div onClick={() => rateArr = []} className='ratingLabel removeLabel'>Remove all labels</div>}

      </div>
      <div className='ratingChart'>
        {['5', '4', '3', '2', '1'].map((rate, i) => {
          return  <RatingBar level={rate} key={i} ratings = {rating.ratings} handleFilterRating={handleFilterRating}/>
        })}
      </div>
      <div className='ratingDetail'></div>
    </div>
  )
}

export default Ratings;