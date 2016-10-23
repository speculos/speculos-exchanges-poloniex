'use strict';

const lib = {
	models:{
		OpenPosition:require('../../../models/OpenPosition')
	}
};

function parseType(p_type) {
	switch(p_type) {
		case 'long':
			return lib.models.OpenPosition.TYPES.LONG;
		case 'short':
			return lib.models.OpenPosition.TYPES.SHORT;
		default:
			throw new Error('Unknown type: ' + p_type);
	}
}

module.exports = function*() {
	let openPosition = yield this.tradingRequest('getMarginPosition', {}, this.request.token.api.key, this.request.token.api.secret);

	let type = parseType(openPosition.type);
	this.response.body = {
		type:type.key,
		amount:parseFloat(openPosition.amount),
		basePrice:parseFloat(openPosition.basePrice),
		liquidationPrice:parseFloat(openPosition.liquidationPrice),
		profitsLosses:parseFloat(openPosition.pl),
		lendingFees:parseFloat(openPosition.lendingFees)
	};
};
