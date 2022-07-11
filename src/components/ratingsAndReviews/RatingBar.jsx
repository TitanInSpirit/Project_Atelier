import React, {useState, useEffect} from 'react';

const RatingBar = ({level, ratings, handleFilterRating}) => {
  const [ratingPercent, serRatingPercent] = useState('')
  const calRating = () => {
    let sum = 0
    for (let value of Object.values(ratings)) {
      sum += Number(value)
    }
    for (let key in ratings) {
      if(key === level) {
        serRatingPercent(Math.floor((Number(ratings[key]) / sum).toFixed(2) * 100))
      }
    }
  }

  useEffect(() => {
    if(ratings) {
      calRating()
    }
  }, [ratings])

  const style = {
      height: '100%',
      backgroundColor: 'green',
      width: `${ratingPercent}%`,
      borderRadius: '5px 0 0 5px',
      boxSizing: 'border-box'
    }

  return (
    <div className='ratingBarContainer' onClick={() => handleFilterRating(level)}>
      {/* {console.log('rating',ratingPercent)} */}
      <div className='ratinglevel' >{level} stars</div>
      <div className='ratingContainer'>
        <div style={style}></div>
      </div>
      <div className='ratingPercent'>{`${ratingPercent}%`}</div>
    </div>
  )
}

export default RatingBar;