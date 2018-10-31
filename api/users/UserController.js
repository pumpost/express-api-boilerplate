'use strict';

const UserClass = require('./User');
const router = require('express').Router();

const user = new UserClass();

module.exports = router;

router.get('/', function (req, res) {
  res.json(user.getUsers());
});
