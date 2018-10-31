'use strict';

const router = require('express').Router();

router.use('/users', require('./users/UserController'));

module.exports = router;
