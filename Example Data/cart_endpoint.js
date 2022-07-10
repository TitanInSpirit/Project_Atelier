/*
====== API EXAMPLE DATA
 ===== /cart EndPoint
   ==== Example Response

Endpoint URL: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/cart

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

==== Example Axios Config

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/cart',
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

[
  {
    sku_id: 1,
    count: 2,
  },
  {
    sku_id: 3,
    count: 1,
  },
  {
    sku_id: 5,
    count: 33,
  },
  //...
];

// If nothing is in cart, will return an empty array
