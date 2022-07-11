/*==================== EXTERNAL MODULES ====================*/
import React from 'react';

/*==================== INTERNAL MODULES ====================*/
import SearchBar from './SearchBar.jsx';
import IndividualQuestion from './IndividualQuestion.jsx';

function QuestionList({questions, handleHelpful, handleReport}) {

  /*----- RENDERER -----*/
  return (
    <div>
      <SearchBar />
      {questions.map((question) => <IndividualQuestion key={'question' + question.question_id} question={question} handleHelpful={handleHelpful} handleReport={handleReport}/>)}
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default QuestionList;