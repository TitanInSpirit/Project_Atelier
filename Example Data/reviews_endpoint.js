/*
====== API EXAMPLE DATA
 ===== /reviews EndPoint
   ==== Example Repsonse

Endpoint URL: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews?product_id=66642

add product_id to query/params section of request

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

==== Example Axios Config

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews?product_id=66642',
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
  "product": "66642",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 1176326,
          "rating": 3,
          "summary": "best!!!1",
          "recommend": true,
          "response": null,
          "body": "best!!!1best!!!1best!!!1best!!!1best!!!1best!!!1best!!!1best!!!1",
          "date": "2022-04-14T00:00:00.000Z",
          "reviewer_name": "qiqi",
          "helpfulness": 22,
          "photos": [
              {
                  "id": 2259497,
                  "url": "https://i.ibb.co/4TzFDhy/images.jpg"
              }
          ]
      },
      {
          "review_id": 1176440,
          "rating": 2,
          "summary": "kkkkkkkk",
          "recommend": true,
          "response": null,
          "body": "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
          "date": "2022-04-15T00:00:00.000Z",
          "reviewer_name": "qiqi",
          "helpfulness": 20,
          "photos": [
              {
                  "id": 2259529,
                  "url": "https://i.ibb.co/gMVttjv/images.webp"
              }
          ]
      },
      {
          "review_id": 1176321,
          "rating": 3,
          "summary": "best purchase ever!",
          "recommend": true,
          "response": null,
          "body": "best purchase ever!best purchase ever!best purchase ever!",
          "date": "2022-04-14T00:00:00.000Z",
          "reviewer_name": "qiqi",
          "helpfulness": 5,
          "photos": []
      },
      {
          "review_id": 1275140,
          "rating": 4,
          "summary": "Summary",
          "recommend": true,
          "response": null,
          "body": "jdklfjarsqkfkljd;kljag;lkjdl;kgja;ldkjg;alkjdgaddgdg",
          "date": "2022-06-03T00:00:00.000Z",
          "reviewer_name": "jchesterfield42",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2455158,
                  "url": "https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg"
              }
          ]
      },
      {
          "review_id": 1275139,
          "rating": 4,
          "summary": "Summary",
          "recommend": true,
          "response": null,
          "body": "jdklfjarsqkfkljd;kljag;lkjdl;kgja;ldkjg;alkjdgaddgdg",
          "date": "2022-06-03T00:00:00.000Z",
          "reviewer_name": "jchesterfield42",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2455157,
                  "url": "https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg"
              }
          ]
      }
  ]
}