/*==================== EXTERNAL MODULES ====================*/
import React from 'react';


/*==================== INTERNAL MODULES ====================*/
import Answer from './Answer.jsx';


function AnswerList({answers, getUpdate}) {

  /*----- RENDER FUNCTIONS -----*/
  const renderAnswerList = () => {
    let answerList = answers.map((answer) => <Answer key={'A-' + answer.id} answer={answer} getUpdate={getUpdate} />);

    // sorts answers by "helpfulness" and so that Seller responses are alwasy at the top
    answerList.sort((a,b) => b.props.answer.helpfulness - a.props.answer.helpfulness);
    answerList.sort((a,b) => {
      if (a.props.answer.answerer_name === 'Seller') {
        return b.props.answer.answerer_name - a.props.answer.answerer_name;
      }
    })

    // if answer list has more than 2 answers, only show two answers and show a "load more answers"
    if (answerList.length > 2) {
      return (
        <React.Fragment>
          <div>{answerList[0]}</div>
          <div>{answerList[1]}</div>
          <button>LOAD MORE ANSWERS</button>
        </React.Fragment>
      )
    } else {
      return (
        <div>
          {answerList}
        </div>
      )
    }
  }

  /*----- RENDERER -----*/
  return (
    <div>
      {renderAnswerList()}
    </div>
  )
}

/*==================== EXPORTS ====================*/
export default AnswerList;