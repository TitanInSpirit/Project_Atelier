const path = require("path")
const express = require("express"); // npm installed
require('dotenv').config() //process.env.GITHUB_API_KEY


const app = express();

app.use(express.static(path.join(__dirname, "/client/dist")));
// other configuration...
app.get('/reviews', (req, res) => {
  console.log('get data')
  res.status(200).send('test')
})

const port = process.env.port || 3000;

app.listen(port, ()=> console.log(`listening to port ${port}`));