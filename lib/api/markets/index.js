'use strict';

const lib = {
	deps:{
		koaRouter:require('koa-router')
	},
	models:{
		Market:require('../../models/Market')
	},
	common:require('../common'),
	search:require('./search'),
	view:require('./view'),
	trades:require('./trades'),
	orders:require('./orders'),
	openOrders:require('./openOrders'),
	openPosition:require('./openPosition')
};

let router = new lib.deps.koaRouter();

router.param('market', function*(p_pair, p_next) {
	this.params.market = this.validate(p_pair, lib.models.Market.VALIDATOR_PAIR.required());

	let parsedPair = lib.models.Market.parsePair(p_pair);
	this.params.currency = parsedPair.currency;
	this.params.asset = parsedPair.asset;

	yield p_next;
});

router.get('/',
	lib.common.parseAuthToken,
	lib.search
);

router.get('/:market',
	lib.common.parseAuthToken,
	lib.view
);

router.get('/:market/trades',
	lib.common.parseAuthToken,
	lib.trades
);

router.get('/:market/orders',
	lib.common.parseAuthToken,
	lib.orders
);

router.use('/:market/openOrders',
	lib.common.parseExchangeToken,
	lib.openOrders.routes(),
	lib.openOrders.allowedMethods()
);

router.use('/:market/openPosition',
	lib.common.parseExchangeToken,
	lib.openPosition.routes(),
	lib.openPosition.allowedMethods()
);

module.exports = router;