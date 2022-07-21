import React, {useState, useEffect} from 'react';

const RatingBar = ({level, ratings, handleFilterRating}) => {
  const [ratingPercent, setRatingPercent] = useState(0)
  const [show, setShow] = useState(true);

  const calRating = () => {
    let sum = 0
    for (let value of Object.values(ratings)) {
      sum += Number(value)
    }
    for (let key in ratings) {
      if(key === level) {
        setRatingPercent(Math.floor((Number(ratings[key]) / sum).toFixed(2) * 100))
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
      backgroundColor: '#81DBD8',
      width: `${ratingPercent}%`,
      boxSizing: 'border-box'
    }



    //why show state here update immediately??? because it's callback???

  const handleClick = () => {
    setShow(!show)
    handleFilterRating(level, show)
  }

  return (
    <div className='ratingBarContainer' onClick={handleClick}>
      {level === '1' ?
      <h3 className='ratinglevel' >{level} star</h3> :
      <h3 className='ratinglevel' >{level} stars</h3>}
      <div className='ratingContainer'>
        <div style={style}></div>
      </div>
      {ratingPercent > 0 ?
      <h3 className='ratingPercent'>{`${ratingPercent}%`}</h3> :
      <h3 className='ratingPercent'>0%</h3>}

    </div>
  )
}

export default RatingBar;