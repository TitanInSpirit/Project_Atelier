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
      `*=== \x1b[34mNew Request Logged:\x1b[0m Type: \x1b[33m${req.method}\x1b[0m REQUEST, URL: \x1b[33m${req.url}\x1b[0m ===*`
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
  })
  .catch(function (error) {
    console.log(error);
  });

});

// Get Requests
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
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.get('/reviews/meta', (req, res) => {

  /* TODO: Update product_id with data sent from client */
  let product_id = 66642 // Fix me
  let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${product_id}`

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
  })
  .catch(function (error) {
    console.log(error);
  });
});

// Post Requests

app.post('/styles', (req, res) => {
  let product_id = req.body.productId
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
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.post('/reviews', (req, res) => {
  let product_id = req.body.productId
  let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews?product_id=${product_id}`

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
  })
  .catch(function (error) {
    console.log(error);
  });
});
// Initialize Server
app.listen(port, () => console.log(`listening to port ${port}`));


