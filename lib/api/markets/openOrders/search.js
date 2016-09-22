'use strict';

const lib = {
	models:{
		Order:require('../../../models/Order')
	}
};

function parseType(p_type) {
	switch(p_type) {
		case 'buy':
			return lib.models.Order.TYPES.BID;
		case 'sell':
			return lib.models.Order.TYPES.ASK;
		default:
			throw new Error('Unknown type: ' + p_type);
	}
}

module.exports = function*(p_next) {
	let openOrders = yield this.tradingRequest('returnOpenOrders', {
		currencyPair:this.params.market
	}, this.request.token.api.key, this.request.token.api.secret);

	this.response.body = openOrders.map(function(p_openOrder) {
		let openOrderType = parseType(p_openOrder.type);
		return {
			id:parseInt(p_openOrder.orderNumber),
			type:openOrderType.key,
			rate:parseFloat(p_openOrder.rate),
			amount:parseFloat(p_openOrder.amount)
		};
	});
};