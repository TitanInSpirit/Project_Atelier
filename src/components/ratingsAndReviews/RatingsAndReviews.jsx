import React, {useEffect, useState} from 'react';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import Sort from './Sort.jsx';
import axios from 'axios'

const RatingsAndReviews = () => {
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState({});
  const [product_id, setProduct_id] = useState('66668');
  const [count, setCount] = useState('100');
  const [rating, setRating] = useState({});
  const [showReviews, setShowReviews] = useState(reviews.results)
  const [rateArr, setRateArr] = useState([]);
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
    setShowReviews(results)
  }, [reviews])


  const handleFilterRating = (level, show) => {
    // console.log(reviews)
    // console.log(results)
    // console.log(level, show)
    if(show) {
      setRateArr([...rateArr, level])
    } else {
      let filterRating = rateArr.filter(rate => rate !== level);
      setRateArr(filterRating);
    }
    console.log('rating arr', rateArr)

  }

  useEffect(() => {
    if(rateArr.length > 0) {
      let filterReview = [];
      for (let rate of rateArr) {
        let filter = results.filter(review => review.rating === Number(rate))
        filterReview = [...filterReview, ...filter]
      }
      console.log('filter review is',filterReview)
      setShowReviews(filterReview)
    } else {
      // console.log('results',results)
      setShowReviews(results)
    }
  }, [rateArr])

  return (
    <div>
      {/* {console.log('reviews are', reviews)} */}
      <h5 className='reviewsRatingTitle'>RATINGS & REVIEWS</h5>
        <div className='ratingAndReviewContainer'>
          <div className='ratingsContainer'>
            <Ratings rating={rating} handleFilterRating={handleFilterRating} rateArr={rateArr}/>
          </div>
          <div className="reviewsContainer">
            <Sort handleSortValue={handleSortValue} results={showReviews}/>
            <Reviews results={showReviews} fetchReviewData={fetchReviewData}/>
          </div>
        </div>
    </div>

  )
}

export default RatingsAndReviews;