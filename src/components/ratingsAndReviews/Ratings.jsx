import React, {useState, useEffect} from 'react';
import RatingBar from './RatingBar.jsx'
import RatingScale from './RatingScale.jsx'


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

  const calRecommend = () => {
    if(rating) {
      let sum = 0;
      let recommend = 0
      for(let key in rating.recommended) {
        sum += Number(rating.recommended[key])
      }
      // let arr = Object.values(rating.recommended)
      // console.log(arr[1])
      // const {true} = rating.recommended
      // recommend = Math.floor((Number(rating.recommended.true) / sum).toFixed(2) * 100);
      // return recommend;
      // console.log(true)

      // console.log(rating.recommended)
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

  return (
    <div>
      {console.log(rating)}
      <div className = 'ratingSum'>
        <h3 className='ratingScore'>{Object.keys(rating).length > 0 && calAveRating()}
        <p className={`ratingAveStar rating-static rating-${formatRating() * 10}`}></p>
        </h3>
      </div>

      <small>{rating && calRecommend()}% of reviews recommend this product</small>
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

      <div className='ratingScale'>
        {convertCharaToArr().map((characteristic, i) => {
          return <RatingScale key={i} characteristic={characteristic} />
        })}
      </div>
    </div>
  )
}

export default Ratings;