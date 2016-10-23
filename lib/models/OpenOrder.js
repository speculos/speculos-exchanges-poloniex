'use strict';

const lib = {
	deps:{
		joi:require('joi')
	}
};

const VALIDATOR_ID = lib.deps.joi.string().min(1).label('openOrder.id');

module.exports.VALIDATOR_ID = VALIDATOR_ID;
