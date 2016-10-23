'use strict';

const lib = {
	deps:{
		Enum:require('enum'),
		joi:require('joi')
	},
	validatorEnum:require('./validatorEnum')
};

const TYPES = new lib.deps.Enum([
	'ASK',
	'BID'
]);

const STRATEGIES = new lib.deps.Enum([
	'FILL_OR_KILL',
	'IMMEDIATE_OR_CANCEL',
	'POST_ONLY'
]);

const VALIDATOR_TYPE = lib.validatorEnum.enum().schema(TYPES).label('order.type');
const VALIDATOR_STRATEGY = lib.validatorEnum.enum().schema(STRATEGIES).label('order.strategy');
const VALIDATOR_RATE = lib.deps.joi.number().min(0).label('order.rate');
const VALIDATOR_AMOUNT = lib.deps.joi.number().min(0).label('order.amount');

module.exports.TYPES = TYPES;
module.exports.STRATEGIES = STRATEGIES;
module.exports.VALIDATOR_TYPE = VALIDATOR_TYPE;
module.exports.VALIDATOR_STRATEGY = VALIDATOR_STRATEGY;
module.exports.VALIDATOR_RATE = VALIDATOR_RATE;
module.exports.VALIDATOR_AMOUNT = VALIDATOR_AMOUNT;
