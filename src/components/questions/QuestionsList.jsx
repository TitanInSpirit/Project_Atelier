/*==================== EXTERNAL MODULES ====================*/
import React from 'react';

/*==================== INTERNAL MODULES ====================*/
import IndividualQuestion from './IndividualQuestion.jsx';

function QuestionList({questions, getUpdate, searchTerm}) {

  /*----- RENDER FUNCTIONS -----*/
  const renderIndividualQuestion = () => {
    return questions.map((question) => <IndividualQuestion key={'Q-' + question.question_id} question={question} getUpdate={getUpdate} searchTerm={searchTerm}/>)
  }

  /*----- RENDERER -----*/
  return (
    <div>
      {renderIndividualQuestion()}
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default QuestionList;