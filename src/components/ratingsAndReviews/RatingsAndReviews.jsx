import React, {useEffect, useState} from 'react';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import Sort from './Sort.jsx';
import axios from 'axios'

const RatingsAndReviews = () => {
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState({});
  const [product_id, setProduct_id] = useState('66666');
  const [count, setCount] = useState('100');
  const [rating, setRating] = useState({});
  const [filterRating, setFilterRating] = useState('')
  const [showReviews, setShowReviews] = useState(reviews)

  const handleSortValue = value => {
    setSort(value)
  }

  const configReview = {
    params: {
      product_id,
      sort,
      count
    }
  }

  const fetchReviewData = () => {
    axios.get('http://localhost:3001/reviews', configReview)
    .then(res => setReviews(res.data))
    .catch(err => console.log('err in fetching data', err))
  }

  var configRating = {
    params: {product_id}
  }

  const fetchRatingData = () => {
    axios.get('http://localhost:3001/reviews/meta', configRating)
    .then(res => setRating(res.data))
    .catch(err => console.log('err in fetching data', err))
  }

  useEffect(() => {
    fetchReviewData();
  }, [product_id, sort, count])

  useEffect(() => {
    fetchRatingData()
  }, [product_id])

  useEffect(() => {
    setShowReviews(reviews)
  }, [reviews])

  const handleFilterRating = (value) => {
    // setFilterRating(value)
  }

  const handleFilterReview = () => {
    console.log(reviews)
  }

  // useEffect(() => {
  //    handleFilterReview()
  // }, [filterRating])

  return (
    <div>
      <h5 className='reviewsRatingTitle'>RATINGS & REVIEWS</h5>
        <div className='ratingAndReviewContainer'>
          <div className='ratingsContainer'>
            <Ratings rating={rating} handleFilterRating={handleFilterRating}/>
          </div>
          <div className="reviewsContainer">
            <Sort handleSortValue={handleSortValue} reviews={showReviews}/>
            <Reviews reviews={showReviews}/>
          </div>
        </div>
    </div>

  )
}

export default RatingsAndReviews;