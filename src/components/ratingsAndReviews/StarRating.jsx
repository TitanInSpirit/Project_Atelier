import React, {useState} from 'react';

const StarRating = ({handleStarRating}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const inlineStyle = (ratingValue) => {
    if(ratingValue <= (hover || rating)) {
      return {color: '#ffc107'}
    } else {
      return {color: '#e4e5e9'}
    }
  }

  const handleClick = (ratingValue) => {
    setRating(ratingValue)
    handleStarRating(ratingValue)
  }

  return (
    <div className='starRatingContainer'>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              className='starRatingRadio'
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
              required
            />
            <div
              className='ratingStar'
              style={inlineStyle(ratingValue)}
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            >
             ★
            </div>
          </label>

        )
      })}
    </div>
  )
}

export default StarRating;