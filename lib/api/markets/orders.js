'use strict';

const lib = {
	deps:{
		joi:require('joi')
	},
	models:{
		Poloniex:require('../../models/Poloniex')
	}
};

const VALIDATOR_DEPTH = lib.deps.joi.number().integer().min(1).label('depth');

function parseOrder(p_order) {
	return {
		rate:parseFloat(p_order[0]),
		amount:parseFloat(p_order[1])
	};
}

module.exports = function*() {
	let depth = this.validate(this.request.query.depth, VALIDATOR_DEPTH.optional().default(100));

	let orderBook = yield this.poloniex.publicRequest('returnOrderBook', {
		currencyPair:this.params.market,
		depth:depth
	});

	this.response.body = {
		bids:orderBook.asks.map(parseOrder),
		asks:orderBook.asks.map(parseOrder)
	};
};
