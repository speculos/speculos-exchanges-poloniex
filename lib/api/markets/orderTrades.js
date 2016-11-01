'use strict';

const lib = {
	models:{
		Order:require('../../models/Order')
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

module.exports = function*() {
	let orderTrades = yield this.tradingRequest('returnOrderTrades', {
		orderNumber:this.params.order
	}, this.request.token.api.key, this.request.token.api.secret);

	this.response.body = orderTrades.map(function(p_orderTrade) {
		let orderType = parseType(p_orderTrade.type);
		return {
			id:p_orderTrade.tradeID.toString(),
			type:orderType,
			date:new Date(p_orderTrade.date),
			rate:parseFloat(p_orderTrade.rate),
			amount:parseFloat(p_orderTrade.amount)
		};
	});
};
