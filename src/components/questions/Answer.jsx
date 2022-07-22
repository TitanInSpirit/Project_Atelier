/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import axios from 'axios';
import {format, parseISO} from  'date-fns';
import styled from 'styled-components';
import {BiUserCircle} from 'react-icons/bi';
import {AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike} from 'react-icons/ai';


/*==================== INTERNAL MODULES ====================*/
import {Container, Submit, Thumbnail, PhotoPreview, LinkButton, Spacer, HelpfulButton} from '../../../public/stylesheets/styles.js';


function Answer({answer, getQuestions, searchTerm}) {
  let {answerer_name, body, date, helpfulness, id, photos} = answer;

  const [wasHelpful, setWasHelpful] = useState(false);
  const [wasReported, setWasReported] = useState(false);
  const [countHelpfulness, setCountHelpfulness] = useState(helpfulness);

  date = format(parseISO(date), 'MMMM d, yyyy');

  /*----- EVENT HANDLER -----*/
  const handleReport = () => {
    setWasReported(true);
    axios.put(`/answers/report/${id}`)
    .then(response => getQuestions())
    .catch(err => `Unable to complete your request. Error: ${console.error(err.message)}`);
  }

  const handleHelpful = () => {
    setWasHelpful(true);
    setCountHelpfulness(helpfulness + 1);
    axios.put(`/answers/helpful/${id}`)
      .then(response => getQuestions())
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
      return <LinkButton style = {{color: '#72DBBD'}}><AiFillDislike/> Reported</LinkButton>;
    }
    return <LinkButton onClick={handleReport} name={id}><AiOutlineDislike/> Report</LinkButton>;
  }

  const renderHelp = () => {
    if (wasHelpful) {
      return <HelpfulAnswerButton onClick={handleHelpful} name={id} disabled={wasHelpful} wasHelpful={wasHelpful}><AiFillLike/></HelpfulAnswerButton>;
    } else {
      return <HelpfulAnswerButton onClick={handleHelpful} name={id} disabled={wasHelpful} wasHelpful={wasHelpful}><AiOutlineLike/></HelpfulAnswerButton>;
    }
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
            <ByLine><BiUserCircle/><p> {renderName()}, {date}</p><Spacer>|</Spacer> <p>{renderHelp()} ({countHelpfulness})</p><Spacer>|</Spacer><p>{renderReport()}</p></ByLine>
          </AnswerContainer>
        )
      }
    } else {
      return (
        <AnswerContainer>
          <h3>{body}</h3>
          <PhotoPreview >{renderPhotos()}</PhotoPreview>
          <ByLine><BiUserCircle/><p> {renderName()}, {date}</p><Spacer>|</Spacer> {renderHelp()}<p>({countHelpfulness})</p><Spacer>|</Spacer>{renderReport()}</ByLine>
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

  const ByLine = styled(Container)`
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const User = styled(BiUserCircle)`
    transform: scale(2);
    font-weight: bold;
    color: #212121;
  `;

const HelpfulAnswerButton = styled(HelpfulButton)`
  transform: scale(${({wasHelpful}) => wasHelpful ? 1.5 : 1});
`