'use strict';

const lib = {
	deps:{
		Enum:require('enum'),
		joi:require('joi')
	},
	validatorEnum:require('./validatorEnum')
};

const TYPES = new lib.deps.Enum([
	'LONG',
	'SHORT'
]);

const VALIDATOR_TYPE = lib.validatorEnum.enum().schema(TYPES).label('openPosition.type');
const VALIDATOR_LENDING_RATE = lib.deps.joi.number().min(0).label('openPosition.lendingRate');

module.exports.TYPES = TYPES;
module.exports.VALIDATOR_TYPE = VALIDATOR_TYPE;
module.exports.VALIDATOR_LENDING_RATE = VALIDATOR_LENDING_RATE;
