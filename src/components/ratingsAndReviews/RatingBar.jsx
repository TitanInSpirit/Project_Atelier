import React from 'react';

const RatingBar = ({level}) => {
  const style = {
      height: '100%',
      backgroundColor: 'green',
      width: '50%'
    }

  return (
    <div className='RatingBarContainer'>
      <p className='ratinglevel'>{level} stars</p>
      <div className='ratingContainer'>
        <div style={style}></div>
      </div>
    </div>
  )
}

export default RatingBar;