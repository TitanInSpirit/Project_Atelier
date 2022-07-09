/*==================== EXTERNAL MODULES ====================*/
import React from 'react';

/*==================== INTERNAL MODULES ====================*/
import SearchBar from './SearchBar.jsx';
import IndividualQuestion from './IndividualQuestion.jsx';

function QuestionList(props) {
  console.log('props: ', props);
  const renderQuestion = ({questions}) => {
    console.log('questions: ', questions);
    questions.map((question) => {
      let {
        asker_name,
        question_body,
        question_date,
        question_helpfulness,
        question_id,
        reported
      } = question;

      return (
        <div>
          <div>{`Q: ${question_body}`}</div>
          <div>Answer</div>
        </div>
      )
    })
  }

  return (
    <div>
      <SearchBar />
      {renderQuestion()}
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default QuestionList;