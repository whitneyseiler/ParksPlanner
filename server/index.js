const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const request = require('request');


app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.listen(3000, () => {
  console.log('now listening on port 3000');
});