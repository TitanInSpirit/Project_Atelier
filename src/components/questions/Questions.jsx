/*==================== EXTERNAL MODULES ====================*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


/*==================== INTERNAL MODULES ====================*/
import QuestionsList from './QuestionsList.jsx';
import SearchBar from './SearchBar.jsx';
import Form from './Form.jsx';
import {Container, Button} from '../../../public/stylesheets/styles.js';


function Questions({product, questionsList, getQuestions}) {

  /*----- STATE HOOKS -----*/
  const [inventory, setInventory] = useState(product);
  const [selectedProduct, setSelectedProduct] = useState(product.id);
  const [showForm, setShowForm] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [questions, setQuestions] = useState(questionsList);
  const [searchTerm, setSearchTerm] = useState();

  /*----- LIFECYCLE -----*/
  useEffect(() => setQuestions(questionsList), [questionsList]);


  /*----- RENDER FUNCTIONS -----*/
  const renderQuestionList = () => {
    if (!questions || (questions && questions.length === 0)) {
      return <div>{renderAddQuestion()}</div>
    }
    if (questions && questions.length > 2) {
      if (!showQuestions) {
        let visibleQuestions = questions.slice(0,2);
        return (
          <>
            <QuestionsList questions={visibleQuestions} searchTerm={searchTerm} getUpdate={getQuestions} />
            <span> {renderMoreAnswered()} {renderAddQuestion()} </span>
          </>
        )
      }
      if (showQuestions) {
        return (
          <>
            <QuestionsList questions={questions} searchTerm={searchTerm} getUpdate={getQuestions} />
            {renderAddQuestion()}
          </>
        )
      }
    } else {
      return (
        <>
          <QuestionsList questions={questions} searchTerm={searchTerm} getUpdate={getQuestions} />
          {renderAddQuestion()}
        </>
      )
    }
  }

  const renderAddQuestion = () => {
    return <Button onClick={() => setShowForm(true)}>Add a Question +</Button>;
  }

  const renderMoreAnswered = () => {
    return <Button onClick={() => setShowQuestions(true)}>More Answered Questions</Button>
  }

  const renderAddQuestionForm = () => {
    return <Form showForm={showForm} setShowForm={setShowForm} id={selectedProduct} getUpdate={getQuestions} submissionType={'Question'} />
  }


  /*----- RENDERER -----*/
  return (
    <QuestionAnswerContainer>
      <QuestionContainer>
        <h5>QUESTIONS & ANSWERS</h5>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        {renderQuestionList()}
        {renderAddQuestionForm()}
      </QuestionContainer>
    </QuestionAnswerContainer>
  )
}


/*==================== EXPORTS ====================*/
export default Questions;

const QuestionContainer = styled(Container)`
  width: 800px;
  max-height: 50vh;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  overflow: scroll;
  *::-webkit-scollbar {
    display: none;
    width: 0 !important
  }
  /* overflow-x: hidden;
  overflow-y: hidden; */
`;

const QuestionAnswerContainer = styled(Container)`
  width: 100vh;
  justify-content: center;
`;