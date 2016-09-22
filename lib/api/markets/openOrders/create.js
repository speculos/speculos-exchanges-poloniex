'use strict';

const lib = {
	models:{
		Order:require('../../../models/Order')
	}
};

function exportStrategy(p_strategy) {
	switch(p_strategy) {
		case lib.models.Order.STRATEGIES.FILL_OR_KILL:
			return {fillOrKill:1};
		case lib.models.Order.STRATEGIES.IMMEDIATE_OR_CANCEL:
			return {immediateOrCancel:1};
		case lib.models.Order.STRATEGIES.POST_ONLY:
			return {postOnly:1};
		default:
			return {};
	}
}

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

module.exports = function*(p_next) {
	let type = this.validate(this.request.body.type, lib.models.Order.VALIDATOR_TYPE.required());
	let strategy = this.validate(this.request.body.strategy, lib.models.Order.VALIDATOR_STRATEGY.required());
	let rate = this.validate(this.request.body.rate, lib.models.Order.VALIDATOR_RATE.required());
	let amount = this.validate(this.request.body.amount, lib.models.Order.VALIDATOR_AMOUNT.required());

	let command = type == lib.models.Order.TYPES.ASK ? 'sell' : 'buy';
	let order = yield this.tradingRequest(command, Object.assign({
		currencyPair:this.params.market,
		rate:rate,
		amount:amount
	}, exportStrategy(strategy)), this.request.token.api.key, this.request.token.api.secret);

	this.response.body = {
		id:parseInt(order.orderNumber),
		resultingTrades:order.resultingTrades.map(function(p_trade) {
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