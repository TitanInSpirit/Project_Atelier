/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import ReactDOM from 'react-dom';

/*==================== INTERNAL MODULES ====================*/

function Form({showForm, setShowForm, submissionType, handleChange, handleSubmit}) {
  if (!showForm) {
    return null;
  }

  /*----- RENDERER -----*/
  return ReactDOM.createPortal(
    <div className="reviewModalBg">
      <form className="reviewModal newReviewContainer">
        <>
          <label>Your Nickname<span style={{color:'red'}}>*required*</span></label>
          <br/>
          <input type="text" required maxLength="60" onChange={handleChange} name="nickname" placeholder="Example: jack543!"></input>
          <p className="disclaimer">For privacy reasons, do not use your full name or email address</p>
        </>
        <>
          <label>Your Email<span style={{color:'red'}}>*required*</span></label>
          <br/>
          <input type="email" required maxLength="60" onChange={handleChange} name="email" placeholder="jackfrost@not.real"></input>
          <p className="disclaimer">For authentification reasons, you will not be emailed</p>
        </>
        <>
          <label>Your {submissionType}<span style={{color:'red'}}>*required*</span></label>
          <br/>
          <textarea type="text" required maxLength="1000" onChange={handleChange} name="response" placeholder="What you wanna say"></textarea>
        </>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => setShowForm(false)}>Close</button>
      </form>
    </div>,
    document.getElementById('portal')
  )
}

/*==================== EXPORTS ====================*/
export default Form;