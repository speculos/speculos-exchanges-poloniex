'use strict';

const lib = {
	node:{
		url:require('url'),
		queryString:require('querystring'),
		crypto:require('crypto')
	},
	deps:{
		request:require('co-request')
	},
	config:{
		poloniex:require('../../../config/poloniex')
	}
};

function checkResponse(p_context, p_response) {
	if(p_response.statusCode >= 400 || p_response.body.error) {
		return p_context.throw(409, 'Poloniex error', {
			code:'poloniex',
			details:{
				statusCode:p_response.statusCode,
				message:p_response.body.error
			}
		});
	}

	return p_response.body;
}

function publicRequest(p_command, p_params) {
	let url = lib.node.url.parse(lib.config.poloniex.URL_PUBLIC);

	return lib.deps.request({
		method:'GET',
		url:lib.node.url.format(Object.assign(url, {
			query:Object.assign({}, p_params, {
				command:p_command
			})
		})),
		json:true
	});
}

function tradingRequest(p_command, p_params, p_apiKey, p_apiSecret) {
	let data = Object.assign({}, p_params, {
		command:p_command,
		nonce:Date.now()
	});

	let postData = lib.node.queryString.stringify(data);
	let hmac = lib.node.crypto.createHmac('sha512', p_apiSecret).update(postData).digest('hex');

	return lib.deps.request({
		method:'POST',
		url:lib.config.poloniex.URL_TRADING,
		headers:{
			'Key':p_apiKey,
			'Sign':hmac
		},
		form:data,
		json:true
	});
}

function attach() {
	return function*(p_next) {
		let self = this;
		this.poloniex = {
			publicRequest:function(p_command, p_params) {
				return publicRequest(p_command, p_params)
				.then(function(p_response) {
					return checkResponse(self, p_response);
				});
			},
			tradingRequest:function(p_command, p_params) {
				return tradingRequest(p_command, p_params)
				.then(function(p_response) {
					return checkResponse(self, p_response);
				});
			}
		};

		yield p_next;
	};
}

module.exports.publicRequest = publicRequest;
module.exports.tradingRequest = tradingRequest;
module.exports.attach = attach;