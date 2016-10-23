'use strict';

const lib = {
	deps:{
		Enum:require('enum')
	},
	validatorEnum:require('./validatorEnum')
};

const TYPES = new lib.deps.Enum([
	'BUY',
	'SELL'
]);

const VALIDATOR_TYPE = lib.validatorEnum.enum().schema(TYPES).label('order.type');

module.exports.TYPES = TYPES;
module.exports.VALIDATOR_TYPE = VALIDATOR_TYPE;
