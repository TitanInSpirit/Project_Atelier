import React, {useEffect, useState} from 'react';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import Sort from './Sort.jsx';
import axios from 'axios'

const RatingsAndReviews = () => {
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState({});
  const [product_id, setProduct_id] = useState('66669');
  const [count, setCount] = useState('100');
  const [rating, setRating] = useState({});
  const [showReviews, setShowReviews] = useState(reviews)
  const {results} = reviews;

  const handleSortValue = value => {
    setSort(value)
  }

  const configReview = {
    params: {
      product_id,
      sort,
      count,
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

  let showRating = [];
  const handleFilterRating = (level, show) => {
    //clear all reviews in showReviews

    //helper function to decide if claer all reviews
    console.log(reviews)
    console.log(results)
    console.log(level, show)
    if(show) {
      showRating.push(level)
      // console.log('results',results)
      let filter = results.filter(review => review.rating === Number(level))
      //find all of review with the rate in my showRating
      //update showReviews to be the newArr
      // console.log('filter',filter)
      // [...showReviews, filterReview]
    } else {
      showRating = showRating.filter(rate => rate !== level)

    }
    console.log(showRating)
  }

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