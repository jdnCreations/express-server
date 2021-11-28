const express = require('express');
const app = express();
const mongoDB = require('mongo');
const mongoose = require('mongoose');

app.get('/test', (req, res) => {
  res.send('you hit test route');
});

app.listen(3000, (req, res) => {
  console.log('server listening on port 3000');
});
