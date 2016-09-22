'use strict';

const lib = {
	deps:{
		koaRouter:require('koa-router'),
		koaBody:require('koa-body')
	},
	common:require('./common'),
	meta:require('./meta'),
	parameters:require('./parameters'),
	markets:require('./markets'),
	tokens:require('./tokens')
};

let router = new lib.deps.koaRouter();

router.use(lib.common.validate.attach());
router.use(lib.common.parseToken.attach());
router.use(lib.common.rights.attach());
router.use(lib.common.poloniex.attach());

router.get('/meta',
	lib.meta
);

router.use('/markets',
	lib.markets.routes(),
	lib.markets.allowedMethods()
);

router.get('/parameters',
	lib.common.parseAuthToken,
	lib.parameters
);

router.post('/tokens',
	lib.common.parseAuthToken,
	lib.deps.koaBody(),
	lib.tokens
);

module.exports = router;