/*
====== API EXAMPLE DATA
 ===== /products EndPoint
   ==== Example Response

Endpoint URL: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

==== Example Axios Config

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products',
  headers: {
    'Authorization': `${PROCESS.ENV.GITHUB_API_KEY}`
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
    id: 66642,
    campus: "hr-rfc",
    name: "Camo Onesie",
    slogan: "Blend in to your crowd",
    description:
      "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    category: "Jackets",
    default_price: "140.00",
    created_at: "2022-03-31T21:13:15.875Z",
    updated_at: "2022-03-31T21:13:15.875Z",
  },
  {
    id: 66643,
    campus: "hr-rfc",
    name: "Bright Future Sunglasses",
    slogan: "You've got to wear shades",
    description:
      "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: "Accessories",
    default_price: "69.00",
    created_at: "2022-03-31T21:13:15.875Z",
    updated_at: "2022-03-31T21:13:15.875Z",
  },
  {
    id: 66644,
    campus: "hr-rfc",
    name: "Morning Joggers",
    slogan: "Make yourself a morning person",
    description:
      "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: "Pants",
    default_price: "40.00",
    created_at: "2022-03-31T21:13:15.875Z",
    updated_at: "2022-03-31T21:13:15.875Z",
  },
  {
    id: 66645,
    campus: "hr-rfc",
    name: "Slacker's Slacks",
    slogan: "Comfortable for everything, or nothing",
    description: "I'll tell you how great they are after I nap for a bit.",
    category: "Pants",
    default_price: "65.00",
    created_at: "2022-03-31T21:13:15.875Z",
    updated_at: "2022-03-31T21:13:15.875Z",
  },
  {
    id: 66646,
    campus: "hr-rfc",
    name: "Heir Force Ones",
    slogan: "A sneaker dynasty",
    description:
      "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: "Kicks",
    default_price: "99.00",
    created_at: "2022-03-31T21:13:15.875Z",
    updated_at: "2022-03-31T21:13:15.875Z",
  },
];
