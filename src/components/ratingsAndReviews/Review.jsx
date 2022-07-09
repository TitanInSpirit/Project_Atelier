import React from 'react';

const Review = ({review}) => {
  return (
    <div>
      <div className='ratingAndTimeContainer'>
        <span className="rating-static rating-25"></span>
        <span>{review.date}</span>
      </div>
    </div>
    )
}

export default Review;