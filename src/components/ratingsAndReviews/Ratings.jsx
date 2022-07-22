import React, {useState, useEffect} from 'react';
import RatingBar from './RatingBar.jsx'
import RatingScale from './RatingScale.jsx'


const Ratings = ({rating, handleFilterRating, rateArr, handleClearAllReviewsLabel}) => {
  const {recommended} = rating;
  let aveRating = 0;

  const calAveRating = () => {
    let sum = 0;
    let reviewCounts = 0;
    for (let key in rating.ratings) {
      sum += key * Number(rating.ratings[key]);
      reviewCounts += Number(rating.ratings[key]);
    }
    aveRating = (sum / reviewCounts).toFixed(1)
    return aveRating;
  }

  const calRecommend = () => {
    if(recommended) {
      let sum = 0;
      let recommend = 0
      for(let key in recommended) {
        sum += Number(recommended[key]);
      }
      recommend = Math.floor((Number(recommended.true) / sum).toFixed(2) * 100);
      return recommend;
    }
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

  const convertCharaToArr = () => {
    let arr = []
    if(rating.characteristics) {
      for (let [key, value] of Object.entries(rating.characteristics) ) {
        let obj = {};
        obj[key] = value;
        arr.push(obj);
      }
    }
    return arr;
  }

  const clearRateArr = () => {
    handleClearAllReviewsLabel();
  }

  const starStyle = {
    '--rating-value': `${calAveRating()}`,
    position: 'relative',
    top: '-15px',
    marginLeft: '8px'
  }

  return (
    <div>
      <div className = 'ratingSum'>
        <h1 className='ratingScore'>{Object.keys(rating).length > 0 && calAveRating()}
        {/* <p className={`ratingAveStar rating-static rating-${formatRating() * 10}`}></p> */}
        <div className="rating" style={starStyle}></div>
        </h1>
      </div>

      <p>{recommended && calRecommend()}% of reviews recommend this product</p>

      <div className='ratingLabelContainer'>
        {rateArr.length > 0 && rateArr.map((rate, i) => {
          if(rate === '1') {
            return <div key={i} className='ratingLabel'>{rate} star</div>
          }
          return <div key={i} className='ratingLabel'>{rate} stars</div>
        })}
        {rateArr.length > 0 && <div onClick={clearRateArr} className='ratingLabel removeLabel'>Remove all labels</div>}
      </div>

      <div className='ratingChart'>
        {['5', '4', '3', '2', '1'].map((rate, i) => {
          return  <RatingBar level={rate} key={i} ratings = {rating.ratings} handleFilterRating={handleFilterRating}/>
        })}
      </div>

      <hr className='ratingBar_ratingScale_break'/>

      <div className='ratingScale'>
        {convertCharaToArr().map((characteristic, i) => {
          return <RatingScale key={i} characteristic={characteristic} />
        })}
      </div>
    </div>
  )
}

export default Ratings;