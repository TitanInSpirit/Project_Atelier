import React from 'react';
import NewReview from './NewReview.jsx';
import Review from './Review.jsx'




const Reviews = ({reviews}) => {
  const {results} = reviews;
  return (
    <div>
      <div>
        {results && results.map(review => {
          return <Review key={review.review_id} review={review}/>
        })}
      </div>
      <button>More reviews</button>
      <button>Add a review +</button>
      <NewReview/>
    </div>
  )
}

export default Reviews;