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
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=66642',
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

  renderQuestionList() {
    if (this.state.questions.length === 0) {
      return <h2> Loading . . .</h2>
    } else {
      return (<QuestionsList questions={this.state.questions}/>)
    }
  }

  render() {
    return (
      <div>
        {this.renderQuestionList()}
        <button>Answer More Questions</button>
        <button>Add a Question</button>
      </div>
    )
  }
}


/*==================== EXPORTS ====================*/
export default Questions;