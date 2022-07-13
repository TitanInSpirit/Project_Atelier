/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import ReactDOM from 'react-dom';

/*==================== INTERNAL MODULES ====================*/

function Form({showForm, submissionType, handleChange, handleSubmit}) {
  if (!showForm) {
    return null;
  }

  /*----- RENDERER -----*/
  return ReactDOM.createPortal(
    <div className="reviewModalBg">
      <form className="reviewModal newReviewContainer">
        <label>Your Nickname</label>
        <input type="text" maxLength="60" onChange={handleChange} name="nickname" placeholder="Example: jack543!"></input>
        <p className="disclaimer">For privacy reasons, do not use your full name or email address</p>
        <label>Your Email</label>
        <input type="email" maxLength="60" onChange={handleChange} name="email" placeholder="jackfrost@not.real"></input>
        <p className="disclaimer">For authentification reasons, you will not be emailed</p>
        <label>Your {submissionType}</label>
        <textarea type="text" maxLength="1000" onChange={handleChange} name="response" placeholder="What you wanna say"></textarea>
        <button onClick={handleSubmit} placeholder="">Submit</button>
      </form>
    </div>,
    document.getElementById('portal')
  )
}

/*==================== EXPORTS ====================*/
export default Form;