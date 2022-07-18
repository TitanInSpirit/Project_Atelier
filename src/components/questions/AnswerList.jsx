/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';


/*==================== INTERNAL MODULES ====================*/
import Answer from './Answer.jsx';
import styled from 'styled-components';
import {Button, Container} from '../../../public/stylesheets/styles.js';

function AnswerList({answers, getUpdate, searchTerm}) {

    /*----- STATE HOOKS -----*/
  const [showAnswers, setShowAnswers] = useState(false);
  const [answerList, setAnswerList] = useState(() => {
    const sortedAnswers = answers;
    sortedAnswers.sort((a,b) => b.helpfulness - a.helpfulness)
      .sort((a,b) => {
        if (a.answerer_name === 'Seller') {
          return b.answerer_name - a.answerer_name;
        }
      })
      const mappedAnswers = sortedAnswers.map((answer) => <Answer key={'A-' + answer.id} answer={answer} getUpdate={getUpdate} searchTerm={searchTerm}/>)
    return mappedAnswers;
  });

  const visibleAnswers = answerList.slice(0,2);

  /*----- EVENT HANDLERS -----*/
  const toggleAnswers = () => setShowAnswers(showAnswers => !showAnswers);

  /*----- RENDER FUNCTIONS -----*/
  const renderAnswerList = () => {
    if (answerList.length > 2) {
      if (!showAnswers) {
        return (
          <>
            <div>{visibleAnswers}</div>
            <ExpandButton onClick={toggleAnswers}>LOAD MORE ANSWERS</ExpandButton>
          </>
        )
      }
      if (showAnswers) {
        return (
          <div>
            {answerList}
            <ExpandButton onClick={toggleAnswers}>COLLAPSE</ExpandButton>
          </div>
        )
      }
    } else {
      return <div>{answerList}</div>
    }
  }

  /*----- RENDERER -----*/
  return (
    <Container>
      <b>A: </b>
      <div>{renderAnswerList()}</div>
    </Container>
  )
}



/*==================== EXPORTS ====================*/
export default AnswerList;

const ExpandButton = styled(Button)`
  border: none;
  padding: 0;
  font-weight: bold;
  font-size: 9pt;
`