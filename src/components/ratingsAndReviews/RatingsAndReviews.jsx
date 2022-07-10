import React, {useEffect, useState} from 'react';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import Sort from './Sort.jsx';
import axios from 'axios'

const RatingsAndReviews = () => {
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState({});
  const [product_id, setProduct_id] = useState('66666');
  const [count, setCount] = useState('5');
  const [rating, setRating] = useState({});

  const handleSortValue = value => {
    setSort(value)
  }

  const config = {
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews',
    // url: 'http://localhost:3001/reviews',
    headers:{'Authorization': 'test'},
    params: {
      product_id,
      sort,
      count
    }
  }

  const fetchReviewData = () => {
    axios(config)
    // axios.get('http://localhost:3001/reviews')
    .then(res => setReviews(res.data))
    .catch(err => console.log('err in fetching data', err))
  }

  var configRating = {
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta',
    headers: {
      'Authorization': 'test'
    },
    params: {product_id}
  }


  const fetchRatingData = () => {
    axios(configRating)
    .then(res => console.log(res.data))
    .catch(err => console.log('err in fetching data', err))
  }

  useEffect(() => {
    fetchReviewData();
  }, [product_id, sort, count])

  useEffect(() => {
    fetchRatingData()
  }, [product_id])


  return (
    <div>
      <h5 className='reviewsRatingTitle'>RATINGS & REVIEWS</h5>
        <div className='ratingAndReviewContainer'>
          <div className='ratingsContainer'>
            <Ratings/>
          </div>
          <div className="reviewsContainer">
            <Sort handleSortValue={handleSortValue}/>
            <Reviews reviews={reviews}/>
          </div>
        </div>
    </div>

  )
}

export default RatingsAndReviews;