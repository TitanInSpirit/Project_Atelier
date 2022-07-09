/*==================== EXTERNAL MODULES ====================*/
import React from 'react';


/*==================== INTERNAL MODULES ====================*/
import Answer from './Answer.jsx';


function AnswerList({answers}) {
  return (
    <div>
      {answers.map((answer) => <Answer key={'answer' + answer.id} answer={answer}/>)}
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default AnswerList;