'use strict';

module.exports = function*() {
	this.response.body = Array.from(this.poloniex.markets.values());
};
