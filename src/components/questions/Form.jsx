/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

/*==================== INTERNAL MODULES ====================*/
import {Button, CloseModal, H3, FormStyle, Container, InputArea, Label} from '../../../public/stylesheets/styles.js';
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
        <Label><label><H3>Your Nickname</H3></label><Required>*</Required></Label>
        <InputArea type="text" required maxLength="60" onChange={handleChange} name="nickname" placeholder="Example: jack543!"></InputArea>
        <Disclaimer>For privacy reasons, do not use your full name or email address</Disclaimer>
      </>
    )
  }

  const renderEmail = () => {
    return (
      <>
        <Label><label><H3>Your Email</H3></label><Required>*</Required></Label>
        <InputArea type="email" required maxLength="60" onChange={handleChange} name="email" placeholder="jackfrost@not.real"></InputArea>
        <Disclaimer>For authentification reasons, you will not be emailed</Disclaimer>
      </>
    )
  }

  const renderSubmission = () => {
    return (
      <>
        <Label><label><H3>Your {submissionType}</H3></label><Required>*</Required></Label>
        <SubmissionArea type="text" required maxLength="1000" onChange={handleChange} name="submission" placeholder="What you wanna say"></SubmissionArea>
      </>
    )
  }

  const renderSubmit = () => {
    return (
      <>
        <Button onClick={handleSubmit}>Submit</Button>
      </>
    )
  }

  /*----- RENDERER -----*/
  return ReactDOM.createPortal(
    <div className="reviewModalBg" onClick={() => setShowForm(false)}>
      <FormStyle onClick={(e) => e.stopPropagation()} className='reviewModal'>
        <H3>{`Submit your ${submissionType}`}</H3>
        <br/>
        <br/>
        {renderNickname()}
        <br/>
        {renderEmail()}
        <br/>
        {renderSubmission()}
        <br/>
        <br/>
        <PhotoContainer>
          <PhotoUpload entry={entry} setEntry={setEntry}/>
        </PhotoContainer>
        <br/>
        <br/>
        <PhotoContainer>
          {renderSubmit()}
        </PhotoContainer>
      </FormStyle>
    </div>,
    document.getElementById('portal')
  )
}

/*==================== EXPORTS ====================*/
export default Form;


const Required = styled(H3)`
  color: red;
`

const Disclaimer = styled.p`
  font-size: 7pt;
`;

const PhotoContainer = styled(Container)`
  justify-content: center;
`;

const SubmissionArea = styled.textarea`
  width: 80%;
  height: 20%;
  background-color: transparent;
  padding: 4px 20px;
  border: solid;
  font-family: 'Hind Madurai', sans-serif;
  border-width: thin;
  border-color: #dbdbdbb7;
  outline-color: #5c5c5c;
  box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.3);
  border-radius: 4px;
`