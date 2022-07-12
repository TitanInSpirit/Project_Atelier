/*==================== EXTERNAL MODULES ====================*/
import React from 'react';


/*==================== INTERNAL MODULES ====================*/
import AnswerList from './AnswerList.jsx';


function IndividualQuestion({question, getUpdate}) {
  let {answers,
    asker_name,
    question_body,
    question_date,
    question_helpfulness,
    question_id,
    reported} = question

  answers = Object.keys(answers).map((key) => answers[key]);

  /*----- RENDER FUNCTIONS -----*/
  const renderQuestion = () => {
    return <div>{`Q: ${question_body} Helpful? Yes (${question_helpfulness}) | Add Answer`}</div>;
  }

  /*----- RENDERER -----*/
  return (
    <div style={{margin: '15px'}}>
      {renderQuestion()}
      <AnswerList answers={answers} getUpdate={getUpdate}/>
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default IndividualQuestion;