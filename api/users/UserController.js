'use strict';

const router = require('express').Router();
const UserClass = require('./User');

module.exports = router;

const user = new UserClass();

router.get('/', function (req, res) {
  res.render.success(user.getUsers());
});
