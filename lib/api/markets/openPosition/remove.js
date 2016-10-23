'use strict';

const lib = {
	Order:require('../../../models/Order')
};

function parseType(p_type) {
	switch(p_type) {
		case 'ask':
			return lib.models.Order.TYPES.ASK;
		case 'bid':
			return lib.models.Order.TYPES.BID;
		default:
			throw new Error('Unknown type: ' + p_type);
	}
}

module.exports = function*() {
	let order = yield this.tradingRequest('closeMarginPosition', {
		currencyPair:this.params.market
	}, this.request.token.api.key, this.request.token.api.secret);

	this.response.body = order.resultingTrades[this.params.market].map(function(p_trade) {
		let tradeType = parseType(p_trade.type);
		return {
			date:new Date(p_trade.date + ' GMT').toString(),
			type:tradeType.key,
			rate:parseFloat(p_trade.rate),
			amount:parseFloat(p_trade.amount)
		};
	});
};
