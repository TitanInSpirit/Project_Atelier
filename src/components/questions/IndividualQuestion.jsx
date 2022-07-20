/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

/*==================== INTERNAL MODULES ====================*/
import AnswerList from './AnswerList.jsx';
import Form from './Form.jsx';
import {Container, H3Text, HelpfulButton, AnswerButton} from '../../../public/stylesheets/styles.js';


function IndividualQuestion({question, getUpdate, searchTerm}) {
  let {answers,
    asker_name,
    question_body,
    question_date,
    question_helpfulness,
    question_id,
    reported} = question

  /*----- STATE HOOKS -----*/
  const [wasHelpful, setWasHelpful] = useState(false);
  const [countHelpfulness, setCountHelpfulness] = useState(question_helpfulness);
  const [showForm, setShowForm] = useState(false);

  answers = Object.keys(answers).map((key) => answers[key]);

  /*----- EVENT HANDLER -----*/
  const handleHelpful = () => {
    setWasHelpful(true);
    setCountHelpfulness(question_helpfulness + 1);
    axios.put(`http://localhost:3001/questions/helpful/${question_id}`)
      .then(response => getUpdate())
      .catch(err => `Unable to complete your request. Error: ${console.error(err.message)}`);
  }


  /*----- RENDER FUNCTIONS -----*/
  const renderHelp = () => {
    return <HelpfulButton onClick={handleHelpful} name={question_id} disabled={wasHelpful}>Yes</HelpfulButton>;
  }

  const renderAddAnswer = () => {
    return <AnswerButton onClick={() => setShowForm(true)}>Add Answer</AnswerButton>;
  }

  const renderQuestion = () => {
    if (searchTerm && searchTerm.length > 2) {
      if (question_body.includes(searchTerm)) {
        return (
          <>
            <IndividualQuestionContainer>
              <H3Text>Q: {question_body}</H3Text> <Responses><p>Helpful? {renderHelp()} ({countHelpfulness}) | {renderAddAnswer()}</p></Responses>
            </IndividualQuestionContainer>
            <AnswerList answers={answers} getUpdate={getUpdate} searchTerm={searchTerm}/>
          </>
        );
      }
    } else {
      return (
        <>
          <IndividualQuestionContainer>
            <H3Text>Q: {question_body}</H3Text> <Responses><p>Helpful? {renderHelp()} ({countHelpfulness}) | {renderAddAnswer()}</p></Responses>
          </IndividualQuestionContainer>
          <AnswerList answers={answers} getUpdate={getUpdate} searchTerm={searchTerm}/>
        </>
      );
    }
  }


  /*----- RENDERER -----*/
  return (
    <ResponseContainer>
      {renderQuestion()}
      <Form showForm={showForm} setShowForm={setShowForm} id={question_id} getUpdate={getUpdate} submissionType={'Answer'} />
    </ResponseContainer>
  )
}

/*==================== EXPORTS ====================*/
export default IndividualQuestion;


const ResponseContainer = styled(Container)`
  flex-direction: column;
  margin: 10px 0 0 0;
`;

const IndividualQuestionContainer = styled(Container)`
  position: relative;
  width: 100%;
  justify-items: flex-start;
  margin: 0;
`;

const Responses = styled.span`
  position: absolute;
  right: 0;
  display: flex;
  justify-self: flex-end;
`;

const Count = styled.p`
  margin-right: 10px;
`