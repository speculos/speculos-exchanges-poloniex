'use strict';

const lib = {
	deps:{
		joi:require('joi')
	},
	models:{
		Trade:require('../../models/Trade')
	}
};

const DEFAULT_INTERVAL = 1000 * 3600 * 24 * 7;
const MAX_INTERVAL = 1000 * 3600 * 24 * 365;
const MAX_NUMBER = 50000;

const VALIDATOR_START_DATE = lib.deps.joi.date().label('startDate');
const VALIDATOR_END_DATE = lib.deps.joi.date().label('endDate');

function parseType(p_type) {
	switch(p_type) {
		case 'buy':
			return lib.models.Trade.TYPES.BUY;
		case 'sell':
			return lib.models.Trade.TYPES.SELL;
		default:
			throw new Error('Unknown type: ' + p_type);
	}
}

module.exports = function*(p_next) {
	let startDate = this.validate(this.request.query.startDate, VALIDATOR_START_DATE.optional().default(new Date(Date.now() - DEFAULT_INTERVAL)));
	let endDate = this.validate(this.request.query.endDate, VALIDATOR_END_DATE.optional().default(new Date()));

	let diff = endDate.getTime() - startDate.getTime();
	if(diff <= 0) {
		this.throw(409, 'Negative or null interval', {code:'interval.invalid'});
	} else if(diff > MAX_INTERVAL) {
		this.throw(409, 'Interval too wide', {code:'interval.tooWide'});
	}

	let tradeHistory = yield this.poloniex.publicRequest('returnTradeHistory', {
		currencyPair:this.params.market,
		start:parseInt(startDate.getTime() / 1000),
		end:parseInt(endDate.getTime() / 1000)
	});

	if(tradeHistory.length == MAX_NUMBER) {
		this.throw(409, 'Interval too wide', {code:'interval.tooWide'});
	}

	this.response.body = tradeHistory.map(function(p_trade) {
		let tradeType = parseType(p_trade.type);
		return {
			id:p_trade.id.toString(),
			date:new Date(p_trade.date + ' GMT').toString(),
			type:tradeType.key,
			rate:parseFloat(p_trade.rate),
			amount:parseFloat(p_trade.amount)
		};
	});
};