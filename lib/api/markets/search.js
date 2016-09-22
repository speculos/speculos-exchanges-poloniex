'use strict';

const lib = {
	config:{
		poloniex:require('../../../config/poloniex')
	}
};

module.exports = function*(p_next) {
	this.response.body = lib.config.poloniex.MARKETS;
};