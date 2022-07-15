/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

/*==================== INTERNAL MODULES ====================*/
import PhotoUpload from './PhotoUpload.jsx'

function Form({showForm, setShowForm, submissionType, handleChange, handleSubmit}) {
  if (!showForm) {
    return null;
  }

/*----- RENDER FUNCTIONS -----*/

  const renderNickname = () => {
    return (
      <>
        <label>Your Nickname<span style={{color:'red'}}>*required*</span></label>
        <br/>
        <input type="text" required maxLength="60" onChange={handleChange} name="nickname" placeholder="Example: jack543!"></input>
        <p className="disclaimer">For privacy reasons, do not use your full name or email address</p>
      </>
    )
  }

  const renderEmail = () => {
    return (
      <>
        <label>Your Email<span style={{color:'red'}}>*required*</span></label>
        <br/>
        <input type="email" required maxLength="60" onChange={handleChange} name="email" placeholder="jackfrost@not.real"></input>
        <p className="disclaimer">For authentification reasons, you will not be emailed</p>
      </>
    )
  }

  const renderSubmission = () => {
    return (
      <>
        <label>Your {submissionType}<span style={{color:'red'}}>*required*</span></label>
        <br/>
        <textarea type="text" required maxLength="1000" onChange={handleChange} name="submission" placeholder="What you wanna say"></textarea>
      </>
    )
  }

  const renderSubmit = () => {
    return (
      <>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => setShowForm(false)}>Close</button>
      </>
    )
  }

  /*----- RENDERER -----*/
  return ReactDOM.createPortal(
    <div className="reviewModalBg">
      <form className="reviewModal newReviewContainer">Submit your {submissionType}
        <br/>
        <br/>
        {renderNickname()}
        <br/>
        {renderEmail()}
        <br/>
        {renderSubmission()}
        <br/>
        <br/>
         <PhotoUpload handleChange={handleChange}/>
        <br/>
        <br/>
        {renderSubmit()}
      </form>
    </div>,
    document.getElementById('portal')
  )
}

/*==================== EXPORTS ====================*/
export default Form;