/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import axios from 'axios';
import env from 'react-dotenv';


/*==================== INTERNAL MODULES ====================*/
import QuestionsList from './QuestionsList.jsx';
import Form from './Form.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = () => {
    var config = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=66643',
      headers: {
        'Authorization': `${env.GITHUB_API_KEY}`
      }
    };

    axios(config)
    .then((response) => {
      this.setState({questions: response.data.results});
    })
    .catch((err) => {
      console.error(err);
    });
  }

  handleHelpful = (event) => {
    // axios.put()
    // this.setState({[]: event.target.name});
    console.log(`handleHelpful: ${event.target.name}`);
  }

  handleReport = (event) => {
    // axios.put()
    // this.setState({[]: event.target.name});
    console.log(`handleReport: ${event.target.name}`);
  }

  renderQuestionList() {
    if (this.state.questions.length === 0) {
      return <h2> Loading . . .</h2>
    } else {
      return (<QuestionsList questions={this.state.questions} handleHelpful={this.handleHelpful} handleReport={this.handleReport}/>)
    }
  }

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