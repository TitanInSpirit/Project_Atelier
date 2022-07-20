// External Modules
require('dotenv').config();
const axios = require('axios');
const path = require('path');
const express = require('express');
const app = express();

// System Variables
const GithubToken = process.env.GITHUB_API_KEY;
const port = process.env.port || 3000;
axios.defaults.headers.common['Authorization'] = GithubToken;

// Middleware
  // Body Data
  app.use(express.json())

  // Serves Static Files
  app.use(express.static(path.join(__dirname, '../public')));

  // Custom Request Logging Middleware
  app.use((req,res,next) => {
    console.log(
      `*=== \x1b[34mNew Request Logged:\x1b[0m Type: \x1b[33m${req.method}\x1b[0m REQUEST, URL: \x1b[33m${req.url}\x1b[0m ===*`
    );
    next();
  })

// Routes
// Get Requests

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

app.get('/reviews', (req, res) => {
  let endpointUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews'
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
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.get('/questions/:id', (req, res) => {
  var config = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=${req.params.id}`,
  };

  axios(config)
  .then(response => res.json(response.data))
  .catch(error => `Unable to retrieve questions. Error: ${console.error(error)}`);
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
    },
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
  // console.log('poooooost')
  // let newReview = req.body;
  let endpointUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews'

  var config = {
    method: 'post',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${GithubToken}`
    },
    data: req.body
  };

  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.post('/questions/Answer/:id', (req, res) => {
  var config = {
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${req.params.id}/answers`,
    data: req.body
  };

  axios(config)
  .then(response => {
    res.sendStatus(201);
  })
  .catch(error => `Unable to modify. Error: ${console.log(error)}`);
});

app.post('/questions/Question/:id', (req, res) => {
  var config = {
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions`,
    data: req.body,
  };

  axios(config)
  .then(response => {
    res.sendStatus(201);
  })
  .catch(error => `Unable to modify. Error: ${console.log(error)}`);
});

app.post('/cart', (req, res) => {
  var config = {
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/cart`,
    data: req.body.params,
  };

  axios(config)
  .then(response => {
    res.sendStatus(201);
  })
  .catch(error => `Unable to modify. Error: ${console.log('error')}`);
});


// PUT Requests
app.put('/reviews/:review_id/helpful', (req, res) => {

  let product_id = req.params.review_id
  let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${product_id}/helpful`

  var config = {
    method: 'put',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${GithubToken}`
    }
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

app.put('/questions/helpful/:id', (req, res) => {
  var config = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${req.params.id}/helpful`
  };

  axios(config)
  .then(response => res.json(response.data))
  .catch(error => `Unable to modify. Error: ${console.log(error)}`);
});

app.put('/answers/report/:id', (req, res) => {
  let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${req.params}/report`

  var config = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${req.params.id}/report`
  };

  axios(config)
  .then(response => res.json(response.data))
  .catch(error => `Unable to modify. Error: ${console.error(error)}`);
});

app.put('/answers/helpful/:id', (req, res) => {
  var config = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${req.params.id}/helpful`
  };

  axios(config)
  .then(response => res.json(response.data))
  .catch(error => `Unable to modify. Error: ${console.error(error)}`);
});

app.put('/reviews/:review_id/report', (req, res) => {
  let product_id = req.params.review_id
  let endpointUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${product_id}/report`

  var config = {
    method: 'put',
    url: endpointUrl,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${GithubToken}`
    }
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
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));


