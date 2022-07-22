import axios from 'axios'
import React, {useState, useEffect} from 'react';
import { format, parseISO } from "date-fns";
import Modal from './Modal.jsx'
import {BiUserCircle} from 'react-icons/bi'
import { FiThumbsUp } from 'react-icons/fi';
import { HiOutlineThumbUp, HiThumbUp } from 'react-icons/hi';
import {AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike} from 'react-icons/ai';
//BiUserCircle


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
            <p className='reviewBodyDetail'>
              {showMore ? review.body : review.body.slice(0, 250) + '...'}
              <button className='showMore' onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show less' : 'Show more'}
              </button>
            </p>
          </div>
      )
    } else {
      return <p className='reviewBodyDetail'>{review.body}</p>
    }
  }


  const handleHelpfulClick = async() => {
    if(!helpful) {
      setNotHelpful(true)
      await setHelpful(true);
      axios.put(`/reviews/${review.review_id}/helpful`)
        .then(() => fetchReviewData())
        .catch(err => console.log('err in udpate helpful', err))
    }

  }

  const handleNotHelpfulClick = () => {
    setHelpful(true);
    setNotHelpful(true)
  }

  const handleReportClick = async() => {
    await setReprot(true);
    axios.put(`/reviews/${review.review_id}/report`)
      .then(() => fetchReviewData())
      .catch(err => console.log('err in udpate report', err))
  }

  const handleImgClick = (photo) => {
    setShowModal(true)
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

  const starStyle = {
    '--rating-value': `${review.rating}`,
    position: 'relative',
    top: '-10px',
    fontSize: '20px',
  }

  return (
    <div className='singleReviewContainer'>
      <div className='ratingAndTimeContainer'>
        {/* <span className={`rating-static rating-${review.rating * 10}`} style={{transform: 'scale(1.1)', marginLeft: '2px'}}></span> */}
        <span className="rating" style={starStyle}></span>
        <div>
        <p className='reviewUsenameDate'><span className='newReviewUserIcon'><BiUserCircle/></span>{review.reviewer_name},  </p>
        <p className='reviewUsenameDate'>{formatDate}</p>
        </div>
      </div>
      <div className='reviewBody'>
        <h3 className='reviewSummary'>{review.summary}</h3>
        {renderBody()}
        {review.recommend && <p className='reviewRecommend'>✓ I recommend this product</p>}
        {response && showResponse()}
      </div>
      <div className='reviewPhotos'>
        {review.photos.map(photo => {
          return <img className='reviewPhoto' src={photo.url} key={photo.id} alt='' onClick={() => handleImgClick(photo)}/>
        })}
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {showImg && <img className='reviewModalImg' src={showImg} alt=''/>}
          <button className='ModalCloseBtn' onClick={() => setShowModal(false)}>X</button>
        </Modal>
      </div>
      <div className='reviewFooter'>
        {/* <div>Helpful?</div> */}
        {/* <button className='reviewHelpfulButton' onClick={handleHelpfulClick} disabled={helpful}>Helpful</button> */}
        {helpful ?
        <div className='reviewThumbUp' style={{color: '#81DBD8'}} onClick={handleHelpfulClick} ><AiFillLike/></div>:
        <div className='reviewThumbUp' onClick={handleHelpfulClick} ><AiOutlineLike/></div>}
        {/* <div className='reviewThumbUp' onClick={handleHelpfulClick} ><FiThumbsUp/></div> */}
        {/* <button className='helpfulAndReport' onClick={handleNotHelpfulClick} disabled={notHelpful}>No</button> */}
        <p className='helpfulNum'>({review.helpfulness})</p>
        <p className='helpfulReportDevide'> | </p>

        <button
          className='reviewReportButton'
          onClick={handleReportClick}
          >
            <span className='reviewReportIcon'><AiOutlineDislike/></span>
            Report
        </button>
      </div>
      {/* <hr className='reviewsBreak'/> */}
    </div>
    )
}

export default Review;