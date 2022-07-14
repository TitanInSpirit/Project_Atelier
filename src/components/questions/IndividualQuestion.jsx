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
  const [showForm, setShowForm] = useState(false);
  const [entry, setEntry] = useState({});

  answers = Object.keys(answers).map((key) => answers[key]);

  /*----- EVENT HANDLER -----*/
  const handleHelpful = () => {
    setWasHelpful(true);
    setIncreaseHelpfulness(question_helpfulness + 1);
    axios.put(`http://localhost:3001/questions/helpful/${question_id}`)
      .then(response => getUpdate())
      .catch(err => `Unable to complete your request. Error: ${console.error(err.message)}`);
  }

  const handleChange = (event) => {
    const {target: {value, name}} = event;
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
    // create variables for each of the required values existing that are set to false
    // if required value is in state, set exists variable to true
    // render alert if any required exists variable is still false and generate a list of the required fields that are empty

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
    if (entry.response === undefined) {
      alert('You must enter a response');
      return;
    }

    axios.post(`http://localhost:3001/questions/answers/${question_id}`, {body: entry.response, name: entry.nickname, email: entry.email})
    .then(response => getUpdate())
    .then(() => setShowForm(false))
    .then(() => getUpdate())
    .catch(err => `Unable to submit your answer. Error: ${console.error(err.message)}`);
  }

  /*----- RENDER FUNCTIONS -----*/
  const renderHelp = () => {
    if (wasHelpful) {
      return <button className="helpfulAndReport" name={question_id}>Yes</button>;
    }
    return <button className="helpfulAndReport" onClick={handleHelpful} name={question_id}>Yes</button>;
  }

  const renderAddAnswer = () => {
    return <button className="helpfulAndReport" onClick={() => setShowForm(true)}>Add Answer</button>;
  }

  const renderQuestion = () => {
    return <div>{`Q: ${question_body} Helpful? `} {renderHelp()} {`(`} {increaseHelpfulness} {`) | `} {renderAddAnswer()}</div>;
  }

  /*----- RENDERER -----*/
  return (
    <div style={{margin: '15px'}}>
      {renderQuestion()}
      <AnswerList answers={answers} getUpdate={getUpdate}/>
      <Form showForm={showForm} setShowForm={setShowForm}submissionType={'Answer'} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default IndividualQuestion;