import React, {useState, useEffect} from 'react';
import Modal from './Modal.jsx'
import StarRating from './StarRating.jsx'

const NewReview = () => {
  const [showModal, setShowModal] = useState(false);
  const [starRating, setStarRating] = useState(null);
  const [recommend, setRecommend] = useState(true);
  const [characteristics, setCharacteristics] = useState({Size: null, Width: null, Comfort: null, Quality: null, Length: null, Fit: null});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [count, setCount] = useState(50);
  const [photos, setPhotos] = useState([]);
  const [reviewer_name, setReviewer_name] = useState('');

  const ratingDes = {1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great'}
  const showDes = () => {
    for (let key in ratingDes) {
      if(starRating === Number(key)) {
        return ratingDes[key]
      }
    }
  }

  const ratingCharacteristicsDes =[['Size', ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide']], ['Width', ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']], ['Comfort', ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']], ['Quality', ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']], ['Length', ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']], ['Fit', ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']]]

  const handleStarRating = (rating) => {
    setStarRating(rating)
  }

  useEffect(() => {
    if(body) {
      let bodyCount = body.length;
      let rest = 50 - bodyCount;
      if(rest >= 0) {
        setCount(rest)
      }
    } else {
      setCount(50)
    }
  }, [body])


  let newPhotoList;
  const handleChange = (e) => {
    console.log(e.target.files)
    // let newPhotoList;
    for (let i = 0; i < e.target.files.length; i++) {
      console.log('check,,,', e.target.files.length[i])
      // newPhotoList = photos.push({url: URL.createObjectURL(e.target.files[i])})
      setPhotos([...photos, {url: URL.createObjectURL(e.target.files[i])}])
    }
    // setPhotos(newPhotoList)
    console.log('photos are', photos)
  }


  const renderCharacteristic = () => {
    return ratingCharacteristicsDes.map((characteristic, i) => {
      return (
        <div className='newReviewCharaDetailContainer'>
          <div className='newReviewCharaDetailtd1'>{characteristic[0]}</div>
            {characteristic[1].map((des, i) => {
              return (
                <React.Fragment key={i}>
                <span className='newReviewCharaDetailtd2'>{des}</span>
                <div className='newReviewCharaDetailtd3'>
                  <input
                    type='radio'
                    value={des}
                    name={characteristic[0]}
                    onChange={e => setCharacteristics({...characteristics, [characteristic[0]]: e.target.value})}
                  />
                  </div>
                </React.Fragment>
              )
            })}
        </div>
      )
    })
  }


  return (
    <div>
      {/* {console.log('photo', photos)} */}
      {console.log('characteristics', characteristics)}
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

            <div className='newReviewRecommend'>
              Do you recommend this product?
              <input type='radio' value='true' name='recommend' onChange={() => setRecommend(true)}/>
              <label>Yes</label>
              <input type='radio' value='fasle' name='recommend' onChange={() => setRecommend(false)}/>
              <label>No</label>
            </div>

            <div className='newReviewCharacteristics'>
              {renderCharacteristic()}
            </div>

            <div className='newReviewSummary'>
              <label>Summary</label>
              <input
                type='text'
                value={summary}
                onChange={e => setSummary(e.target.value)}
                placeholder='Example: Best purchase ever!'
                required
              />
            </div>

            <div className='newReviewBody'>
              <label>Review</label>
              <input
                placeholder='Why did you like the product or not?'
                value={body}
                onChange={e => setBody(e.target.value)}
                minLength='50'
                maxLength='1000'
                required
              />
              {count > 0 ? <div>Minimum required characters left: {count}</div> : <div>Minimum reached</div>}
            </div>

            <div className='newReviewPhotos'>
              <label>Upload photos</label>
              {photos.length < 5 && <input type='file' onChange={handleChange} multiple required/>}
              <div>
              {photos.map((photo, i) => {
                return <img key={i} className='newReviewPhoto' src={photo.url}/>
              })}
              </div>
            </div>

            <div className='newReviewNickname'>
              <label>Nickname</label>
              <input
                type='text'
                value={reviewer_name}
                placeholder='Example: jackson11!'
                onChange={e => setReviewer_name(e.target.value)}
                maxLength='60'
                required
              />
              <div>For privacy reasons, do not use your full name or email address.</div>
            </div>

            <div className='newReviewEmail'>
              <label>Email</label>
              <input
                type='email'
                placeholder='Example: jackson11@email.com'
                required
              />
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