/*
====== API EXAMPLE DATA
 ===== /questions EndPoint
   ==== Example Response

Endpoint URL: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=66642

add product_id to query/params section of request

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

==== Example Axios Config

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=66642',
  headers: {
    'Authorization': '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'
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
  "product_id": "66642",
  "results": [
      {
          "question_id": 593269,
          "question_body": "does it come in desert print?",
          "question_date": "2022-04-15T00:00:00.000Z",
          "asker_name": "jackson",
          "question_helpfulness": 8,
          "reported": false,
          "answers": {
              "5985930": {
                  "id": 5985930,
                  "body": "No, unfortunately they ran out of sand beige ink",
                  "date": "2022-06-03T00:00:00.000Z",
                  "answerer_name": "sara",
                  "helpfulness": 4,
                  "photos": []
              },
              "5985931": {
                  "id": 5985931,
                  "body": "It will be back in stock in 2 months",
                  "date": "2022-06-03T00:00:00.000Z",
                  "answerer_name": "jill",
                  "helpfulness": 3,
                  "photos": []
              }
          }
      },
      {
          "question_id": 592986,
          "question_body": "is this fluffy",
          "question_date": "2022-04-11T00:00:00.000Z",
          "asker_name": "tyrguy",
          "question_helpfulness": 6,
          "reported": false,
          "answers": {
              "5538804": {
                  "id": 5538804,
                  "body": "very!",
                  "date": "2022-04-11T00:00:00.000Z",
                  "answerer_name": "fluffguy",
                  "helpfulness": 8,
                  "photos": []
              }
          }
      }
  ]
}