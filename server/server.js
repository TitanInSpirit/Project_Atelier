// External Modules
require('dotenv').config();
const axios = require('axios');
const path = require('path');
const express = require('express');
const app = express();
const cors = require("cors");

// System Variables
const GithubToken = process.env.GITHUB_API_KEY;
const port = process.env.port || 3001;

// Middleware
  // Body Data
  app.use(express.json())

  // Serves Static Files
  app.use(express.static(path.join(__dirname, '/client/dist')));

  // Headers / CORS Settings
  app.options("*", cors({ origin: `http://localhost:3000`, optionsSuccessStatus: 200 }));
  app.use(cors({ origin: `http://localhost:3000`, optionsSuccessStatus: 200 }));

  // Custom Request Logging Middleware
  app.use((req,res,next) => {
    console.log(
      `*=== New Request Logged: Type: ${req.method} REQUEST, URL: ${req.url} ===*`
    );
    next();
  })

// Routes
app.get('/answers', (req, res) => {

  /* TODO: Update question_id with data sent from client */
  let question_id = 583295 // Fix me
  let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}/answers`

  var config = {
    method: 'get',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${GithubToken}`
    }
  };

  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data))
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

});

app.get('/cart', (req, res) => {
  let endpointUrl =  'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/cart';

  var config = {
    method: 'get',
    url: endpointUrl,
    headers: {
      'Authorization': `${GithubToken}`
    }
  };

  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data))
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.get('/reviews', (req, res) => {
  //  console.log('here')
  //  console.log('config is', req.query)
  /* TODO: Update product_id with data sent from client */
  // let product_id = 66642; // Fix me
  // let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews?product_id=${product_id}`
  let endpointUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews'
  let params = req.query;

  var config = {
    method: 'get',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${process.env.GITHUB_API_KEY}`
    },
    params
  };

  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data))
    // console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.get('/products', (req, res) => {
  let endpointUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products';

  var config = {
    method: 'get',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${GithubToken}`
    }
  };

  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data))
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.get('/questions', (req, res) => {

  /* TODO: Update question_id with data sent from client */
  let question_id = 66642 // Fix me
  let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=${question_id}`

  var config = {
    method: 'get',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${GithubToken}`
    }
  };

  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data))
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.get('/related', (req, res) => {

  /* TODO: Update product_id with data sent from client */
  let product_id = 66642 // Fix me
  let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${product_id}/related`

  var config = {
    method: 'get',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${GithubToken}`
    }
  };

  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data))
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.get('/reviews/meta', (req, res) => {

  /* TODO: Update product_id with data sent from client */
  // let product_id = 66642 // Fix me
  // let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${product_id}`
  let endpointUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta';
  let params = req.query;

  var config = {
    method: 'get',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${GithubToken}`
    },
    params
  };

  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data))
    // console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});


app.get('/styles', (req, res) => {

  /* TODO: Update product_id with data sent from client */
  let product_id = 66642 // Fix me
  let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${product_id}/styles`

  var config = {
    method: 'get',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${GithubToken}`
    }
  };

  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data))
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
   console.log('body issss',req.body.update)
   let updateInfo = req.body.update;
  /* TODO: Update product_id with data sent from client */
  let product_id = req.params.review_id // Fix me
  let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${product_id}/helpful`

  var config = {
    method: 'put',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${GithubToken}`
    },
    updateInfo
  };

  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data))
    // console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});

// Initialize Server
app.listen(port, () => console.log(`listening to port ${port}`));


