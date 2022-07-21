import React, {useEffect, useState} from 'react';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import Sort from './Sort.jsx';
import axios from 'axios'
import SearchBar from './SearchBar.jsx'

const RatingsAndReviews = (props) => {
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState({});
  // if(props.current_product)
  // const [product_id, setProduct_id] = useState(props.product_id.id);
  const [count, setCount] = useState('100');
  const [rating, setRating] = useState({});
  const [showReviews, setShowReviews] = useState(reviews.results)
  const [rateArr, setRateArr] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(0)
  const {results} = reviews;

  let product_id;
  if(props.product_id) {
    product_id = props.product_id.id;
  }

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
    axios.get('/reviews', configReview)
    .then(res => setReviews(res.data))
    .catch(err => console.log('err in fetching data', err))
  }

  var configRating = {
    params: {product_id}
  }

  const fetchRatingData = () => {
    axios.get('/reviews/meta', configRating)
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
    if(show) {
      setRateArr([...rateArr, level])
    } else {
      let filterRating = rateArr.filter(rate => rate !== level);
      setRateArr(filterRating);
    }
  }

  const handleClearAllReviewsLabel = () => {
    setRateArr([]);
  }

  const onHandleAddNewReview = (value) => {
    // console.log({...value, product_id})
    axios.post('/reviews', {...value, product_id: Number(product_id)})
    .then(() => fetchReviewData())
    .catch(err => console.log('catch errrrr', err))
  }

  useEffect(() => {
    if(rateArr.length > 0) {
      let filterReview = [];
      for (let rate of rateArr) {
        let filter = results.filter(review => review.rating === Number(rate))
        filterReview = [...filterReview, ...filter]
      }
      setShowReviews(filterReview)
    } else {
      setShowReviews(results)
    }
  }, [rateArr])

  const handleGetFilterReviewCounts = (value) => {
    if(value){
      setReviewsCount(value.length)
    }
  }


  return (
    <div>
      <h2 className='reviewsRatingTitle' ref={props.reviewsRef}>RATINGS & REVIEWS</h2>
        <div className='ratingAndReviewContainer'>
          <div className='ratingsContainer'>
            <Ratings
              rating={rating}
              handleFilterRating={handleFilterRating}
              rateArr={rateArr}
              handleClearAllReviewsLabel={handleClearAllReviewsLabel}
            />
          </div>
          <div className="reviewsContainer">
            <Sort handleSortValue={handleSortValue} results={showReviews} reviewsCount={reviewsCount}/>

              <Reviews
                results={showReviews}
                fetchReviewData={fetchReviewData}
                onHandleAddNewReview={onHandleAddNewReview}
                handleGetFilterReviewCounts={handleGetFilterReviewCounts}
                styleUrl = {props.style.photos}
                product = {props.products[0]}
              />

          </div>
        </div>
    </div>

  )
}

export default RatingsAndReviews;