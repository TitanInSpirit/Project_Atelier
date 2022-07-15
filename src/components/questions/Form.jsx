/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

/*==================== INTERNAL MODULES ====================*/
import PhotoUpload from './PhotoUpload.jsx'

function Form({showForm, setShowForm, id, getUpdate, submissionType}) {
  if (!showForm) {
    return null;
  }


  /*----- STATE HOOKS -----*/
  const [entry, setEntry] = useState({});


  /*----- EVENT HANDLERS -----*/

  const handleChange = ({target: {value, name}}) => {
    setEntry(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    if (entry.nickname === undefined) {
      alert('You must enter your nickname');
      return;
    }
    if (entry.email === undefined) {
      alert('You must enter your email');
      return;
    }
    if (!validEmailRegex.test(entry.email)) {
      alert('You must enter a valid email');
      return;
    }
    if (entry.submission === undefined) {
      alert('You must enter a response');
      return;
    }

    axios.post(`http://localhost:3001/questions/${submissionType}/${id}`, {
      body: entry.submission,
      name: entry.nickname,
      email: entry.email,
      product_id: Number(id)
      // photos: [...entry.photos] || null
    })
    .then(response => getUpdate())
    .then(() => setShowForm(false))
    .then(() => getUpdate())
    .catch(err => `Unable to submit your answer. Error: ${console.error(err.message)}`);
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