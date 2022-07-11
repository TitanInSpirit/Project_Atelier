/*==================== EXTERNAL MODULES ====================*/
import React from 'react';


/*==================== INTERNAL MODULES ====================*/
import AnswerList from './AnswerList.jsx';


function IndividualQuestion({question, handleHelpful}) {
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
      <div>{`Q: ${question_body} Helpful? Yes (${question_helpfulness}) | Add Answer`}</div>
      <AnswerList answers={answers} handleHelpful={handleHelpful}/>
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default IndividualQuestion;