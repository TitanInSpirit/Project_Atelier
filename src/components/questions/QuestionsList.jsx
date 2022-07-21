/*==================== EXTERNAL MODULES ====================*/
import React from 'react';

/*==================== INTERNAL MODULES ====================*/
import IndividualQuestion from './IndividualQuestion.jsx';

function QuestionList({questions, getQuestions, searchTerm}) {

  /*----- RENDER FUNCTIONS -----*/
  const renderIndividualQuestion = () => {
    return questions.map((question) => <IndividualQuestion key={'Q-' + question.question_id} question={question} getQuestions={getQuestions} searchTerm={searchTerm}/>)
  }

  /*----- RENDERER -----*/
  return (
    <>
      {renderIndividualQuestion()}
    </>
  )
}

/*==================== EXPORTS ====================*/
export default QuestionList;