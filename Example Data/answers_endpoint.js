/*
====== API EXAMPLE DATA
 ===== /answers EndPoint
   ==== Example Response

Endpoint URL: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/583295/answers

Example use with template literal
    let question_id = 583295
    let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}/answers`

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

==== Example Axios Config

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/583295/answers',
  headers: {
    'Authorization': `${process.env.GITHUB_API_KEY}`
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

*/

{
  "question": "583295",
  "page": 1,
  "count": 5,
  "results": [
      {
          "answer_id": 5449650,
          "body": "Voluptatem nesciunt omnis sit molestias eos deserunt.",
          "date": "2021-08-30T00:00:00.000Z",
          "answerer_name": "Hubert_Wilkinson6",
          "helpfulness": 4,
          "photos": [
              {
                  "id": 4859520,
                  "url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              }
          ]
      }
  ]
}