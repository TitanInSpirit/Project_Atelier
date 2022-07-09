import React, {useEffect, useState} from 'react';
import NewReview from './NewReview.jsx';
import Review from './Review.jsx'




const Reviews = () => {






  return (
    <div>
      <Review/>
      <Review/>
      <button>More reviews</button>
      <button>Add a review +</button>
      <NewReview/>
    </div>
  )
}

export default Reviews;