import React, {useState, useEffect} from 'react';
import { format, parseISO } from "date-fns";

const Review = ({review}) => {
  const formatDate = format(parseISO(review.date), "LLLL.dd.yyyy");
  const [showMore, setShowMore] = useState(false);
  const [helpful, setHelpful] = useState(false)
  const [helpfulNum, setHelpfulNum] = useState(review.helpfulness)

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

  useEffect(() => {
    if(helpful) {
      setHelpfulNum(helpfulNum + 1)
    } else {
      setHelpfulNum(helpfulNum - 1)
    }
  }, [helpful])

  return (
    <div>
      <div className='ratingAndTimeContainer'>
        <span className={`rating-static rating-${review.rating * 10}`}></span>
        <span>{review.reviewer_name}</span>,
        <span>{formatDate}</span>
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
        <p className='helpful' onClick={() => setHelpful(!helpful)}>{helpful ? 'No' : 'Yes'}</p> <p className='helpfulNum'>({helpfulNum + 1})</p>
        <p> | </p>
        <p className='report'>Report</p>
      </div>
      <hr/>
    </div>
    )
}

export default Review;