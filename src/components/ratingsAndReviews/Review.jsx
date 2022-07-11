import React, {useState, useEffect} from 'react';
import { format, parseISO } from "date-fns";
import axios from 'axios'

const Review = ({review}) => {
  const [showMore, setShowMore] = useState(false);
  const [helpful, setHelpful] = useState(false)
  const [helpfulNum, setHelpfulNum] = useState(review.helpfulness)

  const formatDate = format(parseISO(review.date), "LLLL d, yyyy");

  const renderBody = () => {
    if(review.body.length > 250) {
      return (
        <div>
      <p>
        {showMore ? review.body : review.body.slice(0, 250) + '...'}
        <button className='showMore' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>
      </p>
      </div>
      )
    } else {
      return <p>{review.body}</p>
    }
  }

  const updateHelpful = (review, update) => {
    axios.put(`http://localhost:3001/reviews/${review.review_id}/helpful`, {update})
  }

  const handleClick = () => {
    setHelpful(!helpful);
    if(helpful) {
      updateHelpful(review, {helpfulness: helpfulNum + 1})
    } else {
      updateHelpful(review, {helpfulness: helpfulNum - 1})
    }
  }

  useEffect(() => {
    setHelpfulNum(review.helpfulness)
  }, [review])

  return (
    <div>
      {console.log(helpfulNum)}
      <div className='ratingAndTimeContainer'>
        <span className={`rating-static rating-${review.rating * 10}`}></span>
        <div>
        <span>{review.reviewer_name},  </span>
        <span>{formatDate}</span>
        </div>
      </div>
      <div className='reviewBody'>
        <b>{review.summary}</b>
        {renderBody()}
        {review.recommend && <small>✓ I recommend this product</small>}
      </div>
      <div className='reviewPhotos'>
        {review.photos.map(photo => {
          return <img className='reviewPhoto' src={photo.url} key={photo.id} alt='' />
        })}
      </div>
      <div className='reviewFooter'>
        <p>Helpful?</p>
        <p className='helpful' onClick={handleClick}>{helpful ? 'No' : 'Yes'}</p> <p className='helpfulNum'>({helpfulNum})</p>
        <p> | </p>
        <p className='report'>Report</p>
      </div>
      <hr/>
    </div>
    )
}

export default Review;