'use strict';

const lib = {
	validate:require('./validate'),
	parseToken:require('./parseToken'),
	parseAuthToken:require('./parseAuthToken'),
	parseExchangeToken:require('./parseExchangeToken'),
	rights:require('./rights'),
	poloniex:require('./poloniex')
};

module.exports.validate = lib.validate;
module.exports.parseToken = lib.parseToken;
module.exports.parseAuthToken = lib.parseAuthToken;
module.exports.parseExchangeToken = lib.parseExchangeToken;
module.exports.rights = lib.rights;
module.exports.poloniex = lib.poloniex;