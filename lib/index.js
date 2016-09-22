'use strict';

const lib = {
	deps:{
		co:require('co')
	},
	config:{
		log:require('../config/log'),
		poloniex:require('../config/poloniex'),
		tokens:require('../config/tokens'),
		http:require('../config/http')
	},
	log:require('./log'),
	meta:require('./meta'),
	push:require('./push'),
	tokens:require('./tokens'),
	http:require('./http')
};

lib.deps.co(function*() {
	let log = lib.log.create(lib.config.log);
	let meta = yield lib.meta.load();

	let push = yield lib.push.connect(Object.assign({}, lib.config.poloniex, {
		log:log.child({module:'push'})
	}));

	let tokens = yield lib.tokens.load(lib.config.tokens);
	let http = yield lib.http.create(lib.config.http, {
		log:log.child({module:'http'}),
		meta:meta,
		push:push,
		tokens:tokens
	});
})
.catch(function(p_error) {
	console.error(p_error.stack);
	process.exitCode = 1;
});