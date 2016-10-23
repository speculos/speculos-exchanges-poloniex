'use strict';

const lib = {
	config:{
		poloniex:require('../../config/poloniex')
	}
};

module.exports = function*() {
	this.response.body = {
		minimalAmount:lib.config.poloniex.MINIMAL_AMOUNT,
		fees:lib.config.poloniex.FEES
	};
};
