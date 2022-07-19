/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import axios from 'axios';
import {format, parseISO} from  'date-fns';
import styled from 'styled-components';


/*==================== INTERNAL MODULES ====================*/
import {Container, Submit, Thumbnail, PhotoPreview, LinkButton} from '../../../public/stylesheets/styles.js';


function Answer({answer, getUpdate, searchTerm}) {
  let {answerer_name, body, date, helpfulness, id, photos} = answer;

  const [wasHelpful, setWasHelpful] = useState(false);
  const [wasReported, setWasReported] = useState(false);
  const [countHelpfulness, setCountHelpfulness] = useState(helpfulness);

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
    setCountHelpfulness(helpfulness + 1);
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
    return <LinkButton onClick={handleHelpful} name={id} disabled={wasHelpful}>Yes</LinkButton>;
  }

  const renderPhotos = () => {
    return photos.map((photo) => {
      return <AnswerThumbnail src={photo} key={`P-${photo}${id}`}/>
  })
  }

  const renderAnswer = () => {
    if (searchTerm && searchTerm.length > 2) {
      if (body.includes(searchTerm)) {
        return (
          <AnswerContainer>
            <h3>{body}</h3>
            <PhotoPreview >{renderPhotos()}</PhotoPreview>
            <ByLine><p>by {renderName()} {`, ${date} | Helpful? `} {renderHelp()} {` (`} {countHelpfulness} {`) | `} {renderReport()}</p></ByLine>
          </AnswerContainer>
        )
      }
    } else {
      return (
        <AnswerContainer>
          <h3>{body}</h3>
          <PhotoPreview >{renderPhotos()}</PhotoPreview>
          <ByLine><p>by {renderName()}, {date}</p><Spacer>|</Spacer> <p>Helpful? {renderHelp()} ({countHelpfulness})</p><Spacer>|</Spacer><p>{renderReport()}</p></ByLine>
        </AnswerContainer>
      )
    }
  }

  /*----- RENDERER -----*/
  return (
    <>
    {renderAnswer()}
    </>
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
    margin: 0 0 10px 5px;
  `;

  const Spacer = styled.p`
    margin: 0 10px 0 10px;
  `;
  const ByLine = styled(Container)`
    margin: 0;
  `;