'use strict';

const express    = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  next();
});

app.use('/api', require('./api/routes'));

module.exports = app;
