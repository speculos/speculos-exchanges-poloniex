'use strict';

const lib = {
	models:{
		Order:require('../../../models/Order'),
		OpenPosition:require('../../../models/OpenPosition')
	}
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
	let type = this.validate(this.request.body.type, lib.models.Order.VALIDATOR_TYPE.required());
	let rate = this.validate(this.request.body.rate, lib.models.Order.VALIDATOR_RATE.required());
	let amount = this.validate(this.request.body.amount, lib.models.Order.VALIDATOR_AMOUNT.required());
	let lendingRate = this.validate(this.request.body.lendingRate, lib.models.OpenPosition.VALIDATOR_LENDING_RATE.optional());

	let command = type == lib.models.Order.TYPES.ASK ? 'marginSell' : 'marginBuy';
	let order = yield this.tradingRequest(command, {
		currencyPair:this.params.market,
		rate:rate,
		amount:amount,
		lendingRate:lendingRate
	}, this.request.token.api.key, this.request.token.api.secret);

	this.response.body = {
		id:parseInt(order.orderNumber),
		resultingTrades:order.resultingTrades[this.params.market].map(function(p_trade) {
			let tradeType = parseType(p_trade.type);
			return {
				date:new Date(p_trade.date + ' GMT').toString(),
				type:tradeType.key,
				rate:parseFloat(p_trade.rate),
				amount:parseFloat(p_trade.amount)
			};
		})
	};
};
