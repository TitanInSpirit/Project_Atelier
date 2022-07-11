import React, {useState, useEffect} from 'react';
import NewReview from './NewReview.jsx';
import Review from './Review.jsx'




const Reviews = ({reviews}) => {
  const [renderReview, setRenderReview] = useState([])
  const [reviewCount, setReviewCount] = useState(2)
  const {results} = reviews;

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
      return <button onClick={handleMoreReview}>More reviews</button>
    }
  }

  return (
    <div>
      {/* {console.log(results)} */}
      <div className='renderReviews'>
        {renderReview && renderReview.map(review => {
          return <Review key={review.review_id} review={review}/>
        })}
      </div>
      {renderMoreReviewsBtn()}
      <button>Add a review +</button>
      <NewReview/>
    </div>
  )
}

export default Reviews;