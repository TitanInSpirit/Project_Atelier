/*==================== EXTERNAL MODULES ====================*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


/*==================== INTERNAL MODULES ====================*/
import QuestionsList from './QuestionsList.jsx';
import SearchBar from './SearchBar.jsx';
import Form from './Form.jsx';
import {Container, Button, ExpandButton} from '../../../public/stylesheets/styles.js';


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
  useEffect(() => setSelectedProduct(product.id), [product]);

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

  const renderMoreQuestions = () => {
    if (!showQuestions) {
      return <MoreQuestionsButton onClick={() => setShowQuestions(true)}>More Questions ></MoreQuestionsButton>
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
        <Container> {renderAddQuestion()} {renderMoreQuestions()}  </Container>
        {renderAddQuestionForm()}
      </QuestionContainer>
    </QuestionAnswerContainer>
  )
}


/*==================== EXPORTS ====================*/
export default Questions;


const QuestionAnswerContainer = styled(Container)`
  justify-content: center;
`;

const QuestionContainer = styled(Container)`
  max-height: 50vh;
  width: 1100px;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  margin: 17px 0 17px 0;
  padding: 7px 0 15px 0;
  border: solid;
  border-width: thin;
  border-color: #dbdbdbb7;
  border-right: none;
  border-left: none;
`;

const ScrollContainer = styled(QuestionContainer)`
  border-top: none;
  overflow-x: hidden;
  margin-bottom: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
`
const QuestionButton = styled(Button)`
  margin: 0 10px 0 10px;
  width: 15em;
  height: 2.5em;
`;

const MoreQuestionsButton = styled(ExpandButton)`
  font-size: 18px;
  margin: 0 10px 0 10px;
  padding: 8px 20px;
`;