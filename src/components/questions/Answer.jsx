/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import axios from 'axios';
import {format, parseISO} from  'date-fns';
import styled from 'styled-components';


/*==================== INTERNAL MODULES ====================*/
import {Container, Submit, Thumbnail, PhotoPreview, LinkButton} from '../../../public/stylesheets/styles.js';


function Answer({answer, getUpdate}) {
  let {answerer_name, body, date, helpfulness, id, photos} = answer;

  const [wasHelpful, setWasHelpful] = useState(false);
  const [wasReported, setWasReported] = useState(false);
  const [increaseHelpfulness, setIncreaseHelpfulness] = useState(helpfulness);

  date = format(parseISO(date), 'MMMM d, yyyy');

  /*----- EVENT HANDLER -----*/
  const handleReport = () => {
    setWasReported(true);
    axios.put(`http://localhost:3001/answers/report/${id}`)
    .then(response => getUpdate())
    .catch(err => `Unable to complete your request. Error: ${console.error(err.message)}`);
  }

  const handleHelpful = () => {
    setWasHelpful(true);
    setIncreaseHelpfulness(helpfulness + 1);
    axios.put(`http://localhost:3001/answers/helpful/${id}`)
      .then(response => getUpdate())
      .catch(err => `Unable to complete your request. Error: ${console.error(err.message)}`);
  }

  /*----- RENDER FUNCTIONS -----*/
  const renderName = () => {
    if (answerer_name === 'Seller') {
      return <b>Seller</b>;
    } else {
      return answerer_name;
    }
  }

  const renderReport = () => {
    if (wasReported) {
      return <LinkButton>Reported</LinkButton>;
    }
    return <LinkButton onClick={handleReport} name={id}>Report</LinkButton>;
  }

  const renderHelp = () => {
    if (wasHelpful) {
      return <LinkButton name={id}>Yes</LinkButton>;
    }
    return <LinkButton onClick={handleHelpful} name={id}>Yes</LinkButton>;
  }

  const renderPhotos = () => {
    return photos.map((photo) => {
      return <AnswerThumbnail src={photo} key={`P-${photo}${id}`}/>
  })
  }

  /*----- RENDERER -----*/
  return (
    <AnswerContainer>
      <div>{body}</div>
      <PhotoPreview>{renderPhotos()}</PhotoPreview>
      <div>by {renderName()} {`, ${date} | Helpful? `} {renderHelp()} {` (`} {increaseHelpfulness} {`) | `} {renderReport()}</div>
    </AnswerContainer>
  )
}

/*==================== EXPORTS ====================*/
export default Answer;


  /*----- CUSTOMIZED COMPONENTS -----*/

  const AnswerThumbnail = styled(Thumbnail)`
    width: 100px;
    height: 75px;
    margin: 5px;
  `;

  const AnswerContainer = styled(Container)`
    flex-direction: column;
    margin: 0, 10px, 10px, 10px;
  `;