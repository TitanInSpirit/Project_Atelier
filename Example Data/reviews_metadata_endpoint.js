/*
====== API EXAMPLE DATA
 ===== /reviews/meta EndPoint
   ==== Example Response

Endpoint URL:  https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=66642

add product_id to query/params section of request

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

==== Example Axios Config

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=66642',
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
  "product_id": "66642",
  "ratings": {
      "1": "1",
      "2": "2",
      "3": "12",
      "4": "24",
      "5": "24"
  },
  "recommended": {
      "false": "9",
      "true": "54"
  },
  "characteristics": {
      "Fit": {
          "id": 223572,
          "value": "2.7636363636363636"
      },
      "Length": {
          "id": 223573,
          "value": "2.8750000000000000"
      },
      "Comfort": {
          "id": 223574,
          "value": "3.1071428571428571"
      },
      "Quality": {
          "id": 223575,
          "value": "3.1132075471698113"
      }
  }
}