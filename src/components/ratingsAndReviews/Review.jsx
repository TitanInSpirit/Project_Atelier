import axios from 'axios'
import React, {useState, useEffect} from 'react';
import { format, parseISO } from "date-fns";
import Modal from './Modal.jsx'


const Review = ({review, fetchReviewData}) => {
  const [showMore, setShowMore] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const [notHelpful, setNotHelpful] = useState(false);
  const [helpfulNum, setHelpfulNum] = useState(review.helpfulness);
  const [report, setReprot] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showImg, setShowImg] = useState('');

  const formatDate = format(parseISO(review.date), "LLLL d, yyyy");
  const {response} = review;


  const renderBody = () => {
    if(review.body.length > 250) {
      return (
          <div className='renderReviewBodycontainer'>
            <div className='reviewBodyDetail'>
            {showMore ? review.body : review.body.slice(0, 250) + '...'}
            <button className='showMore' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}
            </button>
            </div>

          </div>
      )
    } else {
      return <div>{review.body}</div>
    }
  }


  const handleHelpfulClick = async() => {
    setNotHelpful(true)
    await setHelpful(true);
    axios.put(`http://localhost:3001/reviews/${review.review_id}/helpful`)
      .then(() => fetchReviewData())
      .catch(err => console.log('err in udpate helpful', err))
  }

  const handleNotHelpfulClick = () => {
    setHelpful(true);
    setNotHelpful(true)
  }

  const handleReportClick = async() => {
    // console.log(review)
    await setReprot(true);
    axios.put(`http://localhost:3001/reviews/${review.review_id}/report`)
      .then(() => fetchReviewData())
      .catch(err => console.log('err in udpate report', err))
  }

  const handleImgClick = (photo) => {
    setShowModal(true)
    // console.log(photo.url)
    setShowImg(photo.url)
  }

  const showResponse = () => {
    if(response) {
      return (
        <div className='reviewResponseContainer'>
          <div className='reviewResponse'>Response from seller:</div>
          <div >{response}</div>
        </div>
      )
    }
  }

  return (
    <div className='singleReviewContainer'>
      {/* {console.log(review)} */}
      <div className='ratingAndTimeContainer'>
        <span className={`rating-static rating-${review.rating * 10}`}></span>
        <div>
        <span>{review.reviewer_name},  </span>
        <span>{formatDate}</span>
        </div>
      </div>
      <div className='reviewBody'>
        <div className='reviewSummary'>{review.summary}</div>
        {renderBody()}
        {review.recommend && <div className='reviewRecommend'>✓ I recommend this product</div>}
        {response && showResponse()}
      </div>
      <div className='reviewPhotos'>
        {review.photos.map(photo => {
          return <img className='reviewPhoto' src={photo.url} key={photo.id} alt='' onClick={() => handleImgClick(photo)}/>
        })}
        <Modal showModal={showModal} >
          {showImg && <img className='reviewModalImg' src={showImg} alt=''/>}
          <button className='ModalCloseBtn' onClick={() => setShowModal(false)}>X</button>
        </Modal>
      </div>
      <div className='reviewFooter'>
        {/* <div>Helpful?</div> */}
        <button className='reviewHelpfulButton' onClick={handleHelpfulClick} disabled={helpful}>Helpful</button>
        {/* <button className='helpfulAndReport' onClick={handleNotHelpfulClick} disabled={notHelpful}>No</button> */}
        <p className='helpfulNum'>({review.helpfulness})</p>
        <p className='helpfulReportDevide'> | </p>
        <button
          className='reviewReportButton'
          onClick={handleReportClick}
          >
            Report
        </button>
      </div>
      {/* <hr className='reviewsBreak'/> */}
    </div>
    )
}

export default Review;