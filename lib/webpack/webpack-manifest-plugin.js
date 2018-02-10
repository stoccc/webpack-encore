const logger = require('../logger');
logger.deprecation('The lib/webpack/webpack-manifest-plugin.js module is deprecated: require the library directly now: require(\'webpack-manifest-plugin\').');

module.exports = require('webpack-manifest-plugin');
