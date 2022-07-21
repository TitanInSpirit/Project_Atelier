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
        return <QuestionsList questions={visibleQuestions} searchTerm={searchTerm} getQuestions={getQuestions} />
      }
      if (showQuestions) {
        return <QuestionsList questions={questions} searchTerm={searchTerm} getQuestions={getQuestions} />
      }
    } else {
      return <QuestionsList questions={questions} searchTerm={searchTerm} getQuestions={getQuestions} />
    }
  }



  const renderAddQuestion = () => {
    return <QuestionButton onClick={() => setShowForm(true)}>Add a Question +</QuestionButton>;
  }

  const renderMoreAnswered = () => {
    if (!showQuestions) {
      return <QuestionButton onClick={() => setShowQuestions(true)}>More Questions ></QuestionButton>
    }
  }

  const renderAddQuestionForm = () => {
    return <Form showForm={showForm} setShowForm={setShowForm} id={selectedProduct} getQuestions={getQuestions} submissionType={'Question'} />
  }


  /*----- RENDERER -----*/
  return (
    <QuestionAnswerContainer>
      <QuestionContainer>
        <h2><b>QUESTIONS & ANSWERS</b></h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <ScrollContainer className="scroll-container">
          {renderQuestionList()}
        </ScrollContainer>
        <Container> {renderMoreAnswered()} {renderAddQuestion()} </Container>
        {renderAddQuestionForm()}
      </QuestionContainer>
    </QuestionAnswerContainer>
  )
}


/*==================== EXPORTS ====================*/
export default Questions;


const QuestionContainer = styled(Container)`
  max-height: 50vh;
  margin: 0;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
`;

const ScrollContainer = styled(QuestionContainer)`
  overflow-x: hidden;
  margin: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`
const QuestionButton = styled(Button)`
  margin: 0 10px 0 10px;
`;

const QuestionAnswerContainer = styled(Container)`
  justify-content: center;
`;