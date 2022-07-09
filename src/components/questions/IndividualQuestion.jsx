/*==================== EXTERNAL MODULES ====================*/
import React from 'react';


/*==================== INTERNAL MODULES ====================*/
import AnswerList from './AnswerList.jsx';


function IndividualQuestion({question}) {
  let {answers,
    asker_name,
    question_body,
    question_date,
    question_helpfulness,
    question_id,
    reported} = question

  answers = Object.keys(answers).map((key) => answers[key]);

  return (
    <div>
      <div>
        <div>{`Q: ${question_body}`}</div>
        <div>{`Helpful? Yes (${question_helpfulness}) | Add Answer`}</div>
      </div>
      <AnswerList answers={answers}/>
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default IndividualQuestion;