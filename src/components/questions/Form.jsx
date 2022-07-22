/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

/*==================== INTERNAL MODULES ====================*/
import {Button, CloseModal, H3, FormStyle} from '../../../public/stylesheets/styles.js';
import PhotoUpload from './PhotoUpload.jsx'

function Form({showForm, setShowForm, id, getQuestions, submissionType}) {
  if (!showForm) {
    return null;
  }


  /*----- STATE HOOKS -----*/
  const [entry, setEntry] = useState({photos: []});


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

    axios.post(`/questions/${submissionType}/${id}`, {
      body: entry.submission,
      name: entry.nickname,
      email: entry.email,
      product_id: Number(id),
      photos: entry.photos
    })
    .then(response => {
      console.log(response);
      getQuestions()
    })
    .then(() => setShowForm(false))
    .catch(err => `Unable to submit your answer. Error: ${console.error(err.message)}`);
  }


  /*----- RENDER FUNCTIONS -----*/
  const renderNickname = () => {
    return (
      <>
        <Label><label>Your Nickname</label><Required>*</Required></Label>
        <input type="text" required maxLength="60" onChange={handleChange} name="nickname" placeholder="Example: jack543!"></input>
        <p className="disclaimer">For privacy reasons, do not use your full name or email address</p>
      </>
    )
  }

  const renderEmail = () => {
    return (
      <>
        <Label><label>Your Email</label><Required>*</Required></Label>
        <input type="email" required maxLength="60" onChange={handleChange} name="email" placeholder="jackfrost@not.real"></input>
        <p className="disclaimer">For authentification reasons, you will not be emailed</p>
      </>
    )
  }

  const renderSubmission = () => {
    return (
      <>
        <Label><label>Your {submissionType}</label><Required>*</Required></Label>
        <textarea type="text" required maxLength="1000" onChange={handleChange} name="submission" placeholder="What you wanna say"></textarea>
      </>
    )
  }

  const renderSubmit = () => {
    return (
      <>
        <Button onClick={handleSubmit}>Submit</Button>
        {/* <CloseModal onClick={() => setShowForm(false)}>X</CloseModal> */}
      </>
    )
  }

  /*----- RENDERER -----*/
  return ReactDOM.createPortal(
    <div className="reviewModalBg" onClick={() => setShowForm(false)}>
      <FormStyle onClick={(e) => e.stopPropagation()} className='reviewModal'>
        <H3>Submit your{submissionType}</H3>
        <br/>
        <br/>
        {renderNickname()}
        <br/>
        {renderEmail()}
        <br/>
        {renderSubmission()}
        <br/>
        <br/>
         <PhotoUpload entry={entry} setEntry={setEntry}/>
        <br/>
        <br/>
        {renderSubmit()}
      </FormStyle>
    </div>,
    document.getElementById('portal')
  )
}

/*==================== EXPORTS ====================*/
export default Form;


const Required = styled.p`
  color: red;
`
const Label = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`