/*==================== EXTERNAL MODULES ====================*/
import React from 'react';

/*==================== INTERNAL MODULES ====================*/
import SearchBar from './SearchBar.jsx';
import IndividualQuestion from './IndividualQuestion.jsx';

function QuestionList({questions, getUpdate}) {

  const renderIndividualQuestion = () => {
    return questions.map((question) => <IndividualQuestion key={'Q-' + question.question_id} question={question} getUpdate={getUpdate}/>)
  }

  /*----- RENDERER -----*/
  return (
    <div>
      <div style={{margin: '15px'}}>
        <SearchBar />
      </div>
      {renderIndividualQuestion()}
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default QuestionList;