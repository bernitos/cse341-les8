const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
const dotevn = require('dotenv');
dotevn.config();
app.use('/', require('./routes'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});
