/*==================== EXTERNAL MODULES ====================*/
import React from 'react';

/*==================== INTERNAL MODULES ====================*/
import SearchBar from './SearchBar.jsx';
import IndividualQuestion from './IndividualQuestion.jsx';

function QuestionList({questions, getUpdate}) {

  /*----- RENDERER -----*/
  return (
    <div>
      <SearchBar />
      {questions.map((question) => <IndividualQuestion key={'Q-' + question.question_id} question={question} getUpdate={getUpdate}/>)}
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default QuestionList;