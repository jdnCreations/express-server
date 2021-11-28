const express = require('express');
const app = express();
const dev_db_url =
  'mongodb+srv://jdn:mdnlibrary@cluster0.m45e2.mongodb.net/test?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
const mongoose = require('mongoose');

mongoose.connect(mongoDB, (error) => {
  if (error) console.log(error);
  console.log('connection successful');
});

app.get('/test', (req, res) => {
  res.send('you hit test route');
});

app.listen(3000, (req, res) => {
  console.log('server listening on port 3000');
});
