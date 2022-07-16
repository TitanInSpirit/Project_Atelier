/*==================== EXTERNAL MODULES ====================*/
import React, {useState} from 'react';


/*==================== INTERNAL MODULES ====================*/
import Answer from './Answer.jsx';
import {Button} from '../../../public/stylesheets/styles.js';

function AnswerList({answers, getUpdate}) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [answerList, setAnswerList] = useState(() => {
    const sortedAnswers = answers;
    sortedAnswers.sort((a,b) => b.helpfulness - a.helpfulness)
      .sort((a,b) => {
        if (a.answerer_name === 'Seller') {
          return b.answerer_name - a.answerer_name;
        }
      })
      const mappedAnswers = sortedAnswers.map((answer) => <Answer key={'A-' + answer.id} answer={answer} getUpdate={getUpdate} />)
    return mappedAnswers;
  });

  const visibleAnswers = answerList.slice(0,2);

  const toggleAnswers = () => setShowAnswers(showAnswers => !showAnswers);

  /*----- RENDER FUNCTIONS -----*/
  const renderAnswerList = () => {
    if (answerList.length > 2) {
      if (!showAnswers) {
        return (
          <React.Fragment>
            <div>{visibleAnswers}</div>
            <Button onClick={toggleAnswers}>LOAD MORE ANSWERS</Button>
          </React.Fragment>
        )
      }
      if (showAnswers) {
        return (
          <div>
            {answerList}
            <Button onClick={toggleAnswers}>COLLAPSE</Button>
          </div>
        )
      }
    } else {
      return <div>{answerList}</div>
    }
  }

  /*----- RENDERER -----*/
  return (
    <div>
      <div>A:{renderAnswerList()}</div>
    </div>
  )
}



/*==================== EXPORTS ====================*/
export default AnswerList;