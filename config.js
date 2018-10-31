'use strict';

const nodeENV   = process.env.NODE_ENV || 'develop';
let config = {};

switch(nodeENV) {
  case 'production':
    config = require('./config/config.production');
    break;
  case 'staging':
    config = require('./config/config.staging');
    break;
  default:
    config = require('./config/config.develop');
}

module.exports = config;
