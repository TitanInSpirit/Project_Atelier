/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
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
  handleHelpful = (event) => {
    // axios.put()
    // this.setState({[]: event.target.name});
    console.log(`handleHelpful: ${event.target.name}`);
  }

  handleReport = (event) => {
    // axios.put()
    // this.setState({[]: event.target.name});
    console.log(`handleReport: ${event.target.name}`);
    let target = this.state.questions.map((question) => question.answers.filter(answers => answers.answer.id === event.target.name));
    console.log('target: ', target);
  }

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
      // return (<QuestionsList questions={this.state.questions} handleHelpful={this.handleHelpful} handleReport={this.handleReport}/>)
      return (<QuestionsList questions={this.state.questions} getUpdate={this.getQuestions} />)
    }
  }

  /*----- RENDERER -----*/
  render() {
    return (
      <div>
        <h5>QUESTIONS & ANSWERS</h5>
        {this.renderQuestionList()}
        <button>Answer More Questions</button>
        <button>Add a Question</button>
      </div>
    )
  }
}


/*==================== EXPORTS ====================*/
export default Questions;