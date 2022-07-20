import React, {useState, useEffect} from 'react';
import Modal from './Modal.jsx'
import StarRating from './StarRating.jsx'
import PhotoUpload from './PhotoUpload.jsx'


const NewReview = ({onHandleAddNewReview, styleUrl, product}) => {
  const [showModal, setShowModal] = useState(false);
  const [starRating, setStarRating] = useState();
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
        return <span style={{marginLeft: '5px', fontSize: '18px'}}>{ratingDes[key]}</span>
      }
    }
  }

  const ratingCharacteristicsDes =[
    [['Size:', '223734'], ['Too small', '½ a size too small', 'Perfect', '½ a size too big', 'Too wide']],
    [['Width:', '223735'], ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']],
    [['Comfort:', '223667'], ['Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect']],
    [['Quality:', '223668'], ['Poor', 'Below average', 'OK', 'Pretty great', 'Perfect']],
    [['Length:', '223666'], ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']],
    [['Fit:', '223665'], ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']]
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
                 <div className='newReviewCharaDetailtd3'>
                    <input
                      type='radio'
                      value={des}
                      name={characteristic[0]}
                      onChange={e => setCharacteristics({...characteristics, [characteristic[0][1]]: i + 1})}
                      required
                      className='newReviewSingleRadio'
                    />
                    {i !== 4 ?<hr className='newReviewRadioDevide'/> : <hr className="newReviewRadioDevidehide"></hr>}
                    </div>
                  {/* <div className='newReviewCharaDetailtd2'>{des}</div> */}
                  <br/>

                    {i % 2 !== 0 ? <div className='newReviewCharaDetailtd2'></div> : <div className='newReviewCharaDetailtd2'>{des}</div>}
                </div>
              )
            })}
        </div>
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (starRating === undefined) {
      alert('You must enter an overrall rating');
      return;
    }

    if (body.length < 50) {
      alert('You must enter at least 50 characters');
      return;
    }
    onHandleAddNewReview({rating: starRating, summary, body, recommend, name: reviewer_name, email, photos, characteristics});
    setShowModal(false);
    setSummary('');
    setBody('');
    setPhotos([]);
    setReviewer_name('');
    setEmail('')
  }

  return (
    <div>
      {/* {console.log(product)} */}
      {/* {console.log('characteristics', characteristics)} */}
      {/* {console.log('recommend', recommend)} */}
      <button className='addNewRivewBtn' onClick={() => setShowModal(true)}>Add a review +</button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className='newReviewContainer'>
          <h3 className='newReviewTitle'>Write Your Review</h3>

          <div>
            {styleUrl && <img src={styleUrl[0].url} alt='' className='newReviewShowProductPic'/>}
          </div>
          <form  className='newReviewForm' onSubmit={handleSubmit}>
            <div className='newReviewOverrall'>
              {product && <div className='newReviewProTitle'>{product.name}</div>}
              <span className='newReviewOverrallRate' >Overrall rating:<span style={{color: 'red'}}>*</span></span> <span>{starRating && showDes()}</span>
              <StarRating handleStarRating={handleStarRating}/>
                <div className='newReviewRecommend'>
                <span style={{fontWeight: 'bold', marginRight: '10px'}}>
                  Do you recommend this product?<span style={{color: 'red'}}>*</span>
                </span>
                <input className='newReviewRecomRadio' type='radio' value='true' name='recommend' onChange={() => setRecommend(true)} required/>
                <label style={{marginRight: '10px'}}>Yes</label>
                <input className='newReviewRecomRadio' type='radio' value='false' name='recommend' onChange={() => setRecommend(false)}/>
                <label>No</label>
              </div>
            </div>
            <hr style={{color: 'lightgray', margin: '20px 0 20px 0'}}/>
            <div className='newReviewCharacteristics'>
              <div className='newReviewChrarcteristicTitle'>Characteristics<span style={{color: 'red'}}>*</span></div>
              {renderCharacteristic()}
            </div>
            <hr style={{color: 'lightgray', margin: '15px 0 15px 0'}}/>
            <div className='newReviewSummary'>
              <label className='newReviewLabel'>Summary<span style={{color: 'red'}}>*</span></label>
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
              <label className='newReviewLabel'>Review<span style={{color: 'red'}}>*</span></label>
              <textarea
                placeholder='Why did you like the product or not?'
                value={body}
                onChange={e => setBody(e.target.value)}
                minLength='50'
                maxLength='1000'
                required
                className='newReviewInput'
                style={{height: '88px'}}
              />
              <div className='newReviewSubTitle'>
              {count > 0 ? <div >Minimum required characters left: {count}</div> : <div>Minimum reached</div>}
              </div>
            </div>

            <div className='newReviewPhotos'>
              <PhotoUpload setPhotos={setPhotos} photos={photos}/>

            </div>

            <div className='newReviewNickname'>
              <label className='newReviewLabel'>Nickname<span style={{color: 'red'}}>*</span></label>
              <input
                type='text'
                value={reviewer_name}
                placeholder='Example: jackson11!'
                onChange={e => setReviewer_name(e.target.value)}
                maxLength='60'
                required
                className='newReviewInput'
              />
              <div className='newReviewSubTitle'>For privacy reasons, do not use your full name or email address.</div>
            </div>

            <div className='newReviewEmail'>
              <label className='newReviewLabel'>Email<span style={{color: 'red'}}>*</span></label>
              <input
                type='email'
                placeholder='Example: jackson11@email.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className='newReviewInput'
              />
              <div className='newReviewSubTitle'>For authentication reasons, you will not be emailed.</div>
            </div>

            <button className='newFormBtn' >SUBMIT</button>
          </form>
          <button  className='newFormBtn newFormCancelBtn' onClick={() => setShowModal(false)}>CANCEL</button>
        </div>
    </Modal>
    </div>
  )
}

export default NewReview;