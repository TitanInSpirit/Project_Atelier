/*==================== EXTERNAL MODULES ====================*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';


/*==================== INTERNAL MODULES ====================*/
import QuestionsList from './QuestionsList.jsx';
import Form from './Form.jsx';


function Questions({products}) {

  /*----- STATE HOOKS -----*/
  const [inventory, setInventory] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState();
  const [questions, setQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);


  /*----- LIFECYCLE -----*/
  useEffect(() => getQuestions(), []);


  /*----- EVENT HANDLERS -----*/
  const getQuestions = () => {
    axios.get(`http://localhost:3001/questions`)
    .then(response => {
      setSelectedProduct(response.data.product_id);
      setQuestions(response.data.results);
    })
    .catch(err => `Unable to get questions due to following error: ${console.error(err.message)}`);
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
      <Form showForm={showForm} setShowForm={setShowForm} id={selectedProduct} getUpdate={getQuestions} submissionType={'Question'} />
    </div>
  )
}


/*==================== EXPORTS ====================*/
export default Questions;