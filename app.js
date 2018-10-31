'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const Output = require('./libs/Output');
const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.render = new Output(res);
  next();
});

app.use('/info', (req, res) => {
  res.json({
    env: config.env
  });
});
app.use('/api', require('./api/routes'));

module.exports = app;
