'use strict';

module.exports = function*(p_next) {
	yield this.tradingRequest('cancelOrder', {
		orderNumber:this.params.openOrder
	}, this.request.token.api.key, this.request.token.api.secret);

	this.response.body = null;
};