// External Modules
require('dotenv').config();
const axios = require('axios');
const path = require('path');
const express = require('express');
const app = express();

// Middleware
  // Body Data
  app.use(express.json())
  // Serves Static Files
  app.use(express.static(path.join(__dirname, '/client/dist')));
  // Custom Request Logging Middleware
  app.use((req,res,next) => {
    console.log(
      `*=== New Request Logged: Type: ${req.method} REQUEST, URL: ${req.url} ===*`
    );
    next();
  })

// System Variables
let GithubToken = process.env.GITHUB_API_KEY;

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

  /* TODO: Update product_id with data sent from client */
  let product_id = 66642; // Fix me
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
    console.log(JSON.stringify(response.data));
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
    console.log(JSON.stringify(response.data));
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

const port = process.env.port || 3000; // test

app.listen(port, () => console.log(`listening to port ${port}`));


