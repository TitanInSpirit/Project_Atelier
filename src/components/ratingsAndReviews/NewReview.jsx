import React, {useState, useEffect} from 'react';
import Modal from './Modal.jsx'
import StarRating from './StarRating.jsx'
import PhotoUpload from './PhotoUpload.jsx'

const NewReview = ({onHandleAddNewReview}) => {
  const [showModal, setShowModal] = useState(false);
  const [starRating, setStarRating] = useState(null);
  const [recommend, setRecommend] = useState(true);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [count, setCount] = useState(50);
  const [photos, setPhotos] = useState([]);
  const [reviewer_name, setReviewer_name] = useState('');
  const [email, setEmail] = useState('');

  const ratingDes = {1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great'}

  const showDes = () => {
    for (let key in ratingDes) {
      if(starRating === Number(key)) {
        return ratingDes[key]
      }
    }
  }

  const ratingCharacteristicsDes =[
    [['Size', '223734'], ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide']],
    [['Width', '223735'], ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']],
    [['Comfort', '223667'], ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']],
    [['Quality', '223668'], ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']],
    [['Length', '223666'], ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']],
    [['Fit', '223665'], ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']]
  ]

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


  const renderCharacteristic = () => {
    return ratingCharacteristicsDes.map((characteristic, i) => {
      return (
        <div className='newReviewCharaDetailContainer' key={i}>
          <div className='newReviewCharaDetailtd1'>{characteristic[0][0]}</div>
            {characteristic[1].map((des, i) => {
              return (
                <div className='newReviewDesAndRadio' key={i}>
                  <div className='newReviewCharaDetailtd2'>{des}</div>
                  <br/>
                  <div className='newReviewCharaDetailtd3'>
                    <input
                      type='radio'
                      value={des}
                      name={characteristic[0]}
                      onChange={e => setCharacteristics({...characteristics, [characteristic[0][1]]: i + 1})}
                      required
                    />
                    </div>
                </div>
              )
            })}
        </div>
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleAddNewReview({rating: starRating, summary, body, recommend, name: reviewer_name, email, photos, characteristics});
    setShowModal(false);
  }


  return (
    <div>
      {/* {console.log('photo', photos)} */}
      {/* {console.log('characteristics', characteristics)} */}
      <button className='addNewRivewBtn' onClick={() => setShowModal(true)}>Add a review +</button>
      <Modal showModal={showModal}>
        <div className='newReviewContainer'>
          <h3 className='newReviewTitle'>Write Your Review</h3>
          <div className='newReviewSubTitle'>About the [wait for name props pass here]</div>
          <form  onSubmit={handleSubmit}>

            <div>
              <span style={{fontWeight: 'bold'}}>Overrall rating: </span> <span>{starRating && showDes()}</span>
              <StarRating handleStarRating={handleStarRating}/>
            </div>

            <div className='newReviewRecommend'>
              <span style={{fontWeight: 'bold'}}>
                Do you recommend this product?
              </span>
              <input type='radio' value='true' name='recommend' onChange={() => setRecommend(true)} required/>
              <label>Yes</label>
              <input type='radio' value='false' name='recommend' onChange={() => setRecommend(false)}/>
              <label>No</label>
            </div>
            <hr style={{color: 'lightgray', marginBottom: '20px'}}/>
            <div className='newReviewCharacteristics'>
              {renderCharacteristic()}
            </div>
            <hr style={{color: 'lightgray', margin: '15px 0 15px 0'}}/>
            <div className='newReviewSummary'>
              <label className='newReviewLabel'>Summary</label>
              <input
                type='text'
                value={summary}
                onChange={e => setSummary(e.target.value)}
                placeholder='Example: Best purchase ever!'
                required
                className='newReviewInput'
              />
            </div>

            <div className='newReviewBody'>
              <label className='newReviewLabel'>Review</label>
              <textarea
                placeholder='Why did you like the product or not?'
                value={body}
                onChange={e => setBody(e.target.value)}
                minLength='50'
                maxLength='1000'
                required
                className='newReviewInput'
                style={{height: '50px'}}
              />
              <div className='newReviewSubTitle' style={{top:'-5px'}}>
              {count > 0 ? <div >Minimum required characters left: {count}</div> : <div>Minimum reached</div>}
              </div>
            </div>

            <div className='newReviewPhotos'>
              <PhotoUpload setPhotos={setPhotos} photos={photos}/>
            </div>

            <div className='newReviewNickname'>
              <label className='newReviewLabel'>Nickname</label>
              <input
                type='text'
                value={reviewer_name}
                placeholder='Example: jackson11!'
                onChange={e => setReviewer_name(e.target.value)}
                maxLength='60'
                required
                className='newReviewInput'
              />
              <div className='newReviewSubTitle' style={{top:'-4px'}}>For privacy reasons, do not use your full name or email address.</div>
            </div>

            <div className='newReviewEmail'>
              <label className='newReviewLabel'>Email</label>
              <input
                type='email'
                placeholder='Example: jackson11@email.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className='newReviewInput'
              />
            </div>

            <button className='newFormBtn' style={{marginTop: '20px'}}>SUBMIT</button>
          </form>
          <button className='newFormBtn' onClick={() => setShowModal(false)}>CANCEL</button>
        </div>
    </Modal>
    </div>
  )
}

export default NewReview;