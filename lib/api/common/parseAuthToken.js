'use strict';

module.exports = function*(p_next) {
	this.parseToken({
		algorithm:this.tokens.auth.algorithm,
		publicKey:this.tokens.auth.keys.public,
		issuer:this.tokens.auth.version
	});

	yield p_next;
};