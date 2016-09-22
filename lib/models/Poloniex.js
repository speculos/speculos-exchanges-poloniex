'use strict';

const lib = {
	deps:{
		joi:require('joi')
	}
};

const VALIDATOR_API_KEY = lib.deps.joi.string().regex(/^[A-Z0-9]{8}-[A-Z0-9]{8}-[A-Z0-9]{8}-[A-Z0-9]{8}$/).label('api.key');
const VALIDATOR_API_SECRET = lib.deps.joi.string().regex(/^[0-9a-f]{128}$/).label('api.secret');

module.exports.VALIDATOR_API_KEY = VALIDATOR_API_KEY;
module.exports.VALIDATOR_API_SECRET = VALIDATOR_API_SECRET;