import React, {useState, useEffect} from 'react';
import { format, parseISO } from "date-fns";
import axios from 'axios'

const Review = ({review, fetchReviewData}) => {
  const [showMore, setShowMore] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const [helpfulNum, setHelpfulNum] = useState(review.helpfulness);
  const [report, setReprot] = useState(false);

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


  const handleHelpfulClick = async() => {
    await setHelpful(true);
    axios.put(`http://localhost:3001/reviews/${review.review_id}/helpful`)
      .then(() => fetchReviewData())
      .catch(err => console.log('err in udpate helpful', err))
  }

  const handleReportClick = async() => {
    // console.log(review)
    await setReprot(true);
    axios.put(`http://localhost:3001/reviews/${review.review_id}/report`)
      .then(() => fetchReviewData())
      .catch(err => console.log('err in udpate report', err))
  }


  return (
    <div>
      {/* {console.log(helpfulNum)} */}
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
        <button className='helpfulAndReport' onClick={handleHelpfulClick} disabled={helpful}>Yes</button> <p className='helpfulNum'>({review.helpfulness})</p>
        <p> | </p>
        <button
          className='helpfulAndReport'
          onClick={handleReportClick}
          disabled={report}
          >
            {report ? 'Reported' : 'Report'}
        </button>
      </div>
      <hr/>
    </div>
    )
}

export default Review;