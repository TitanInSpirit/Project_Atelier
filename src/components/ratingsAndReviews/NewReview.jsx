import React, {useState} from 'react';
import Modal from './Modal.jsx'

const NewReview = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add a review +</button>
      <Modal showModal={showModal}>
        <div className='newReviewContainer'>
          <h3>Write Your Review</h3>
          <small>About the [wait for name props pass here]</small>
          <form >
            <input type='text'/>
            <button>Submit</button>
          </form>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
    </Modal>
    </div>
  )
}

export default NewReview;