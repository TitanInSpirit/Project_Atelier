/*==================== EXTERNAL MODULES ====================*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';


/*==================== INTERNAL MODULES ====================*/
import QuestionsList from './QuestionsList.jsx';
import Form from './Form.jsx';


function Questions({products}) {

  /*----- STATE HOOKS -----*/
  const [inventory, setInventory] = useState(products);
  const [questions, setQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [entry, setEntry] = useState({});


  /*----- LIFECYCLE -----*/
  useEffect(() => getQuestions(), []);

  /*----- EVENT HANDLERS -----*/
  const getQuestions = () => {
    axios.get(`http://localhost:3001/questions`)
    .then(response => setQuestions(response.data.results))
    .catch(err => `Unable to get questions due to following error: ${console.error(err.message)}`);
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

  axios.post(`http://localhost:3001/questions/answers/${question_id}`, {body: entry.submission, name: entry.nickname, email: entry.email, photos: [...entry.photos]})
  .then(response => getUpdate())
  .then(() => setShowForm(false))
  .then(() => getUpdate())
  .catch(err => `Unable to submit your answer. Error: ${console.error(err.message)}`);
}

  /*----- RENDER FUNCTIONS -----*/
  const renderQuestionList = () => {
    if (questions.length === 0) {
      return <h2> Loading . . .</h2>
    } else {
      return <QuestionsList questions={questions} getUpdate={getQuestions} />;
    }
  }

  const renderAddQuestion = () => {
    return <button style={{margin: '10px'}} onClick={() => setShowForm(true)}>Add a Question</button>;
  }

  /*----- RENDERER -----*/
  return (
    <div style={{margin: '30px'}} className="questions-and-answers">
      <h5>QUESTIONS & ANSWERS</h5>
      {renderQuestionList()}
      <button style={{margin: '10px'}}>Answer More Questions</button>
      {renderAddQuestion()}
      <Form showForm={showForm} setShowForm={setShowForm} submissionType={'Question'} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}


/*==================== EXPORTS ====================*/
export default Questions;