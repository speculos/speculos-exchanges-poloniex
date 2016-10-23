'use strict';

const lib = {
	deps:{
		joi:require('joi')
	}
};

const REGEX_COIN = /^[A-Z0-9]+$/;
const SEPARATOR_PAIR = '_';

const VALIDATOR_CURRENCY = lib.deps.joi.string().regex(REGEX_COIN).label('market.currency');
const VALIDATOR_ASSET = lib.deps.joi.string().regex(REGEX_COIN).label('market.asset');
const VALIDATOR_PAIR = lib.deps.joi.string().regex(/^[A-Z0-9]+_[A-Z0-9]+$/).label('market.pair');

function parsePair(p_pair) {
	let parts = p_pair.split(SEPARATOR_PAIR);
	return {
		currency:parts[0],
		asset:parts[1]
	};
}

module.exports.VALIDATOR_CURRENCY = VALIDATOR_CURRENCY;
module.exports.VALIDATOR_ASSET = VALIDATOR_ASSET;
module.exports.VALIDATOR_PAIR = VALIDATOR_PAIR;
module.exports.parsePair = parsePair;
