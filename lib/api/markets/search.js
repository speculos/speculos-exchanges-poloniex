'use strict';

const lib = {
	config:{
		poloniex:require('../../../config/poloniex')
	}
};

module.exports = function*() {
	this.response.body = lib.config.poloniex.MARKETS;
};
