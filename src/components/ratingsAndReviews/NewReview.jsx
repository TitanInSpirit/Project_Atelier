import React, {useState} from 'react';
import Modal from './Modal.jsx'
import StarRating from './StarRating.jsx'

const NewReview = () => {
  const [showModal, setShowModal] = useState(false)
  const [starRating, setStarRating] = useState(null)
  const [recommend, setRecommend] = useState(true)
  const [characteristics, setCharacteristics] = useState({Size: null, Width: null, Comfort: null, Quality: null, Length: null, Fit: null})
  const [summary, setSummary] = useState('')

  const ratingDes = {1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great'}
  const showDes = () => {
    for (let key in ratingDes) {
      if(starRating === Number(key)) {
        return ratingDes[key]
      }
    }
  }

  const ratingCharacteristics = {Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'], Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'], Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'], Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'], Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'], Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']}

  const handleStarRating = (rating) => {
    setStarRating(rating)
  }

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add a review +</button>
      <Modal showModal={showModal}>
        <div className='newReviewContainer'>
          <h3>Write Your Review</h3>
          <small>About the [wait for name props pass here]</small>
          <form >
            <div>
              <span>Overrall rating: </span> <span>{starRating && showDes()}</span>
              <StarRating handleStarRating={handleStarRating}/>
            </div>
            <div>
              Do you recommend this product?
              <input type='radio' value='true' name='recommend' onChange={() => setRecommend(true)}/>
              <label>Yes</label>
              <input type='radio' value='fasle' name='recommend' onChange={() => setRecommend(false)}/>
              <label>No</label>
            </div>
            <div className='newReviewSummary'>
              <label>Summary</label>
              <input type='text' value={summary} onChange={e => setSummary(e.target.value)} placeholder='Example: Best purchase ever!' />
            </div>
            <div className='newReviewBody'>
              <label>Review</label>
              <textarea placeholder='Why did you like the product or not?' />
            </div>
            <button>Submit</button>
          </form>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
    </Modal>
    </div>
  )
}

export default NewReview;