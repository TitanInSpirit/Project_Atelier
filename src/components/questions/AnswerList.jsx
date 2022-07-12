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
            <button className="more-answers-button">LOAD MORE ANSWERS</button>
          </React.Fragment>
        )
    } else {
      return <div> {answerList} </div>
    }
  }

  /*----- RENDERER -----*/
  return (
    <div>
      <div>A:{renderAnswerList()}</div>
    </div>
  )
}

// class AnswerList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       answerList: this.props.answers
//         .sort((a,b) => b.helpfulness - a.helpfulness)
//         .sort((a,b) => {
//           if (a.answerer_name === 'Seller') {
//             return b.answerer_name - a.answerer_name;
//           }
//         })
//         .map((answer) => <Answer key={'A-' + answer.id} answer={answer} getUpdate={this.props.getUpdate} />),
//       showAnswers: false
//     };
//   }

//   componentDidMount() {
//     // creates shortened answer list to show if there are more than two answers
//     this.setState({visibleAnswers: this.state.answerList.slice(0,2)})
//   }

//   toggleAnswers = () => {
//     this.setState({showAnswers: !this.state.showAnswers});
//   }

//   /*----- RENDER FUNCTIONS -----*/
//   renderAnswerList = () => {
//     // if answer list has more than 2 answers, only show two answers and show a "load more answers"
//     if (this.state.answerList.length > 2) {
//       if (!this.state.showAnswers) {
//         return (
//           <React.Fragment>
//             <div>{this.state.visibleAnswers}</div>
//             <button className="more-answers-button" onClick={this.toggleAnswers}>LOAD MORE ANSWERS</button>
//           </React.Fragment>
//         )
//       }
//       if (this.state.showAnswers) {
//         return (
//           <React.Fragment>
//             <div className="all-answers-list">{this.state.answerList}</div>
//             <button className="more-answers-button" onClick={this.toggleAnswers}>COLLAPSE</button>
//           </React.Fragment>
//         )
//       }
//     } else {
//       return <div> {this.state.answerList} </div>
//     }
//   }

//   /*----- RENDERER -----*/
//   render() {
//     return (
//       <div>
//         <div>A:{this.renderAnswerList()}</div>
//       </div>
//     )
//   }

// }

/*==================== EXPORTS ====================*/
export default AnswerList;