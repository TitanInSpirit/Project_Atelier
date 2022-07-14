/*==================== EXTERNAL MODULES ====================*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';


/*==================== INTERNAL MODULES ====================*/
import QuestionsList from './QuestionsList.jsx';
import Form from './Form.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
      questions: []
    };
  }

  /*----- LIFECYCLE -----*/
  componentDidMount() {
    this.getQuestions();
  }

  /*----- EVENT HANDLERS -----*/
  getQuestions = () => {
    axios.get(`http://localhost:3001/questions`)
    .then(response => this.setState({questions:response.data.results}))
    .catch(err => `Unable to get questions due to following error: ${console.error(err.message)}`);
}

  /*----- RENDER FUNCTIONS -----*/
  renderQuestionList() {
    if (this.state.questions.length === 0) {
      return <h2> Loading . . .</h2>
    } else {
      return <QuestionsList questions={this.state.questions} getUpdate={this.getQuestions} />;
    }
  }

  /*----- RENDERER -----*/
  render() {
    return (
      <div style={{margin: '30px'}} className="questions-and-answers">
        <h5>QUESTIONS & ANSWERS</h5>
        {this.renderQuestionList()}
        <button style={{margin: '10px'}}>Answer More Questions</button>
        <button style={{margin: '10px'}}>Add a Question</button>
      </div>
    )
  }
}


/*==================== EXPORTS ====================*/
export default Questions;