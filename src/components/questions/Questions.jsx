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
      console.log(JSON.stringify(response.data.results));
      this.setState({questions: [...JSON.stringify(response.data.results)]});
      // this.setState({questions: response.data});
      console.log('this.state after data: ', this.state);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        {/* <QuestionsList customerQuestions={this.state}/> */}
        <button>Answer More Questions</button>
        <button>Add a Question</button>
      </div>
    )
  }
}


/*==================== EXPORTS ====================*/
export default Questions;