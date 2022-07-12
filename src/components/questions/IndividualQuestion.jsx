/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


/*==================== INTERNAL MODULES ====================*/
import AnswerList from './AnswerList.jsx';
import Form from './Form.jsx';


function IndividualQuestion({question, getUpdate}) {
  let {answers,
    asker_name,
    question_body,
    question_date,
    question_helpfulness,
    question_id,
    reported} = question

  const [wasHelpful, setWasHelpful] = useState(false);
  const [increaseHelpfulness, setIncreaseHelpfulness] = useState(question_helpfulness);
  const [,] = useState();

  answers = Object.keys(answers).map((key) => answers[key]);

  /*----- EVENT HANDLER -----*/
  const handleHelpful = () => {
    setWasHelpful(true);
    setIncreaseHelpfulness(question_helpfulness + 1);
    axios.put(`http://localhost:3001/questions/helpful/${question_id}`)
      .then(response => getUpdate())
      .catch(err => `Unable to complete your request. Error: ${console.error(err.message)}`);
  }

  const handleAddAnswer = () => {

  }


  const handleChange = () => {

  }

  const handleSubmitAnswer = (event) => {
    event.preventDefault();


    axios.post(`http://localhost:3001/questions/answers/${question_id}`)
    .then(response => getUpdate())
    .catch(err => `Unable to submit your answer. Error: ${console.error(err.message)}`);
  }

  /*----- RENDER FUNCTIONS -----*/
  const renderHelp = () => {
    if (wasHelpful) {
      return <button className="button-link" name={question_id}>Yes</button>;
    }
    return <button className="button-link" onClick={handleHelpful} name={question_id}>Yes</button>;
  }

  const renderAddAnswer = () => {
    return <button className="button-link" onClick={handleAddAnswer}>Add Answer</button>;
  }

  const renderQuestion = () => {
    return <div>{`Q: ${question_body} Helpful? `} {renderHelp()} {`(`} {increaseHelpfulness} {`) | `} {renderAddAnswer()}</div>;
  }

  /*----- RENDERER -----*/
  return (
    <div style={{margin: '15px'}}>
      {renderQuestion()}
      <AnswerList answers={answers} getUpdate={getUpdate}/>
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default IndividualQuestion;