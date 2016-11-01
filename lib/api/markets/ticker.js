'use strict';

module.exports = function*() {
	let ticker = yield this.poloniex.publicRequest('returnTicker');

	let res = [];
	for(let [pair, market] of this.poloniex.markets.entries()) {
		let data = ticker[pair];
		if(!data) {
			continue;
		}

		res.push({
			currency:market.currency,
			asset:market.asset,
			ticker:{
				last:parseFloat(data.last),
				volume:{
					currency:parseFloat(data.baseVolume),
					asset:parseFloat(data.quoteVolume)
				},
				highest:parseFloat(data.highestBid),
				lowest:parseFloat(data.lowestAsk),
				percentChange:parseFloat(data.percentChange)
			}
		});
	}

	this.response.body = res;
};
