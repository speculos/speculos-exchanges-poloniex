'use strict';

const lib = {
	config:{
		poloniex:require('../../config/poloniex')
	}
};

module.exports = function*(p_next) {
	this.response.body = {
		minimalAmount:lib.config.poloniex.MINIMAL_AMOUNT,
		fees:lib.config.poloniex.FEES
	};
};