import React, {useState, useEffect} from 'react';
import NewReview from './NewReview.jsx';
import Review from './Review.jsx'




const Reviews = ({results, fetchReviewData, onHandleAddNewReview}) => {
  const [renderReview, setRenderReview] = useState([])
  const [reviewCount, setReviewCount] = useState(2)

  useEffect(() => {
    if(results) {
      setRenderReview(results.slice(0, reviewCount))
    }
  }, [results])


  const handleMoreReview = () => {
    setReviewCount(reviewCount + 2);
  }

  useEffect(() => {
    if(results) {
      setRenderReview(results.slice(0, reviewCount))
    }
  }, [reviewCount])

  const renderMoreReviewsBtn = () => {
    if(results && renderReview.length < results.length) {
      return <button className='moreReviewsBtn' onClick={handleMoreReview}>More reviews ></button>
    }
  }

  return (
    <div>
      {/* {console.log(results)} */}
      {/* {console.log(filterReviewFromRating)} */}
      <div className='renderReviews'>
        {renderReview && renderReview.map(review => {
          return <Review key={review.review_id} review={review} fetchReviewData={fetchReviewData}/>
        })}
      </div>
      <hr className='reviewsBreak'/>
      {renderMoreReviewsBtn()}
      <NewReview onHandleAddNewReview={onHandleAddNewReview}/>
    </div>
  )
}

export default Reviews;

//{photos: ['url', 'url']