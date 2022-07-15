import React, {useState, useEffect} from 'react';
import NewReview from './NewReview.jsx';
import Review from './Review.jsx'
import {BsSearch} from 'react-icons/bs'



const Reviews = ({results, fetchReviewData, onHandleAddNewReview, handleGetFilterReviewCounts}) => {
  const [renderReview, setRenderReview] = useState([])
  const [reviewCount, setReviewCount] = useState(2)
  const [searchValue, setSearchValue] = useState('')

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
    if(results && renderReview && renderReview.length < results.length) {
      return <button className='moreReviewsBtn' onClick={handleMoreReview}>More reviews ></button>
    }
  }

  let temp = [];
  useEffect(() => {
    if(searchValue.length > 3) {
      for (let review of renderReview) {
        if(review.body.toUpperCase().includes(searchValue.toUpperCase())) {
          temp.push(review)
        }
      }
    } else {
      setRenderReview(results);
      return;
    }
    setRenderReview(temp)
  }, [searchValue])

  useEffect(() => {
    handleGetFilterReviewCounts(renderReview)
  }, [renderReview])


  const renderReviewResult = () => {
    if(renderReview) {
      if(renderReview.length <= 0) {
        return <div className='reviewNoFound'><BsSearch/> Nothing found...</div>
      } else {
        return renderReview.map(review => {
          return <Review key={review.review_id} review={review} fetchReviewData={fetchReviewData}/>
        })
      }
    }
  }

  return (
    <div>
      {console.log(results)}
      {console.log('renderReview', renderReview)}
      {/* {console.log(filterReviewFromRating)} */}
      <div>
        <input
          type='text'
          placeholder='Search...'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          className='reivewSearchBar'
        />
      </div>
      <div className='renderReviews'>
        {/* {renderReview && renderReview.map(review => {
          return <Review key={review.review_id} review={review} fetchReviewData={fetchReviewData}/>
        })} */}
        {renderReviewResult()}
      </div>
      <hr className='reviewsBreak'/>
      {renderMoreReviewsBtn()}
      <NewReview onHandleAddNewReview={onHandleAddNewReview}/>
    </div>
  )
}

export default Reviews;

//{photos: ['url', 'url']