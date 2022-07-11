/*==================== EXTERNAL MODULES ====================*/
import React from 'react';


/*==================== INTERNAL MODULES ====================*/
import Answer from './Answer.jsx';


function AnswerList({answers, handleHelpful}) {

  const renderAnswerList = () => {
    // reponses from the seller should be at the top regardless of helpfulness

    let answerList = answers.map((answer) => <Answer key={'answer' + answer.id} answer={answer} handleHelpful={handleHelpful}/>);
    answerList.sort((a,b) => b.props.answer.helpfulness - a.props.answer.helpfulness);

    // if answer list has more than 2 answers, only show two answers and show a "load more answers"
    if (answerList.length > 2) {
      return (
        <div>
          <div>{answerList[0]}</div>
          <div>{answerList[1]}</div>
          <button>LOAD MORE ANSWERS</button>
        </div>
      )
    } else {
      return (
        <div>
          {answerList}
        </div>
        )
    }
  }


  return (
    <div>
      {renderAnswerList()}
      {/* {answers.map((answer) => <Answer key={'answer' + answer.id} answer={answer}/>)} */}
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default AnswerList;