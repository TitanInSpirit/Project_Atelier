import React from 'react';
import { format, parseISO } from "date-fns";

const Review = ({review}) => {
  const formatDate = format(parseISO(review.date), "LLLL.dd.yyyy");
  return (
    <div>
      <div className='ratingAndTimeContainer'>
        <span className={`rating-static rating-${review.rating}`}></span>
        <span>{review.reviewer_name}</span>,
        <span>{formatDate}</span>
      </div>
      <div>
        <b>{review.summary}</b>
        <p>{review.body}</p>
      </div>
      <div className='reviewFooter'>
        <p>Helpful?</p>
        <p className='helpful'>Yes(9)</p>
        <p> | </p>
        <p className='report'>Report</p>
      </div>
      <hr/>
    </div>
    )
}

export default Review;