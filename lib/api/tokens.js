'use strict';

const lib = {
	deps:{
		jwt:require('jsonwebtoken')
	},
	models:{
		Poloniex:require('../models/Poloniex')
	}
};

function* create(p_next) {
	let apiKey = this.validate(this.request.body.apiKey, lib.models.Poloniex.VALIDATOR_API_KEY.required());
	let apiSecret = this.validate(this.request.body.apiSecret, lib.models.Poloniex.VALIDATOR_API_SECRET.required());

	let token = lib.deps.jwt.sign({
		user:this.request.token.user,
		rights:{
			market:{
				openOrders:{search:1, create:1},
				openOrder:{remove:1},
				openPosition:{view:1, modify:1}
			}
		},
		api:{
			key:apiKey,
			secret:apiSecret
		}
	}, this.tokens.self.keys.private, {
		algorithm:this.tokens.self.algorithm,
		issuer:this.meta.name + '@' + this.tokens.self.version,
		expiresIn:this.tokens.self.expiresIn
	});

	this.response.body = {
		token:token
	};
}

module.exports = create;