'use strict';

const lib = {
	deps:{
		autobahn:require('autobahn')
	}
};

module.exports.connect = function(p_config) {
	return new Promise(function(p_resolve, p_reject) {
		p_config.log.info({url:p_config.URL_PUSH, realm:p_config.PUSH_REALM}, 'Connecting to the Poloniex PUSH server');

		let push = new lib.deps.autobahn.Connection({
			url:p_config.URL_PUSH,
			realm:p_config.PUSH_REALM
		});

		push.onopen = function() {
			p_resolve(push);
		};

		push.onclose = function(p_reason) {
			switch(p_reason) {
				case 'unreachable':
					p_reject(new Error('Push unreachable'));
					break;
				case 'unsupported':
					p_reject(new Error('Push unsupported'));
					break;
			}
		};

		push.open();
	});
};
