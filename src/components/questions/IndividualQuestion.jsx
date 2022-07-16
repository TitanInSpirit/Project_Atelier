/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


/*==================== INTERNAL MODULES ====================*/
import AnswerList from './AnswerList.jsx';
import Form from './Form.jsx';
import {LinkButton} from '../../../public/stylesheets/styles.js';


function IndividualQuestion({question, getUpdate}) {
  let {answers,
    asker_name,
    question_body,
    question_date,
    question_helpfulness,
    question_id,
    reported} = question

  /*----- STATE HOOKS -----*/
  const [wasHelpful, setWasHelpful] = useState(false);
  const [increaseHelpfulness, setIncreaseHelpfulness] = useState(question_helpfulness);
  const [showForm, setShowForm] = useState(false);

  answers = Object.keys(answers).map((key) => answers[key]);

  /*----- EVENT HANDLER -----*/
  const handleHelpful = () => {
    setWasHelpful(true);
    setIncreaseHelpfulness(question_helpfulness + 1);
    axios.put(`http://localhost:3001/questions/helpful/${question_id}`)
      .then(response => getUpdate())
      .catch(err => `Unable to complete your request. Error: ${console.error(err.message)}`);
  }


  /*----- RENDER FUNCTIONS -----*/
  const renderHelp = () => {
    if (wasHelpful) {
      return <LinkButton className="helpfulAndReport" name={question_id}>Yes</LinkButton>;
    }
    return <LinkButton className="helpfulAndReport" onClick={handleHelpful} name={question_id}>Yes</LinkButton>;
  }

  const renderAddAnswer = () => {
    return <LinkButton className="helpfulAndReport" onClick={() => setShowForm(true)}>Add Answer</LinkButton>;
  }

  const renderQuestion = () => {
    return <div>{`Q: ${question_body} Helpful? `} {renderHelp()} {`(`} {increaseHelpfulness} {`) | `} {renderAddAnswer()}</div>;
  }


  /*----- RENDERER -----*/
  return (
    <div style={{margin: '15px'}}>
      {renderQuestion()}
      <AnswerList answers={answers} getUpdate={getUpdate}/>
      <Form showForm={showForm} setShowForm={setShowForm} id={question_id} getUpdate={getUpdate} submissionType={'Answer'} />
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default IndividualQuestion;