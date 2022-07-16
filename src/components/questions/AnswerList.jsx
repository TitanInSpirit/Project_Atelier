/*==================== EXTERNAL MODULES ====================*/
import React, {useState, useEffect} from 'react';


/*==================== INTERNAL MODULES ====================*/
import Answer from './Answer.jsx';
import {Button} from '../../../public/stylesheets/styles.js';
class AnswerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answerList: this.props.answers
        .sort((a,b) => b.helpfulness - a.helpfulness)
        .sort((a,b) => {
          if (a.answerer_name === 'Seller') {
            return b.answerer_name - a.answerer_name;
          }
        })
        .map((answer) => <Answer key={'A-' + answer.id} answer={answer} getUpdate={this.props.getUpdate} />),
      showAnswers: false
    };
  }

  componentDidMount() {
    this.setState({visibleAnswers: this.state.answerList.slice(0,2)})
  }

  toggleAnswers = () => {
    this.setState({showAnswers: !this.state.showAnswers});
  }

  /*----- RENDER FUNCTIONS -----*/
  renderAnswerList = () => {
    if (this.state.answerList.length > 2) {
      if (!this.state.showAnswers) {
        return (
          <React.Fragment>
            <div>{this.state.visibleAnswers}</div>
            <Button onClick={this.toggleAnswers}>LOAD MORE ANSWERS</Button>
          </React.Fragment>
        )
      }
      if (this.state.showAnswers) {
        return (
          <div className="all-answers-list" style={{maxheight: '50vh'}}>
            {this.state.answerList}
            <Button onClick={this.toggleAnswers}>COLLAPSE</Button>
          </div>
        )
      }
    } else {
      return <div> {this.state.answerList} </div>
    }
  }

  /*----- RENDERER -----*/
  render() {
    return (
      <div>
        <div>A:{this.renderAnswerList()}</div>
      </div>
    )
  }

}

/*==================== EXPORTS ====================*/
export default AnswerList;