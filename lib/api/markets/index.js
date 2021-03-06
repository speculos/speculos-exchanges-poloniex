'use strict';

const lib = {
	deps:{
		koaRouter:require('koa-router')
	},
	models:{
		Market:require('../../models/Market'),
		OpenOrder:require('../../models/OpenOrder')
	},
	common:{
		parseAuthToken:require('../common/parseAuthToken'),
		parseExchangeToken:require('../common/parseExchangeToken')
	},
	search:require('./search'),
	ticker:require('./ticker'),
	view:require('./view'),
	trades:require('./trades'),
	orders:require('./orders'),
	openOrders:require('./openOrders'),
	openPosition:require('./openPosition'),
	orderTrades:require('./orderTrades')
};

let router = new lib.deps.koaRouter();

router.param('market', function*(p_pair, p_next) {
	this.params.market = this.validate(p_pair, lib.models.Market.VALIDATOR_PAIR.required());
	if(!this.poloniex.markets.has(this.params.market)) {
		this.throw(404, 'Market not found', {code:'market.notFound'});
	}

	let parsedPair = lib.models.Market.parsePair(p_pair);
	this.params.currency = parsedPair.currency;
	this.params.asset = parsedPair.asset;

	yield p_next;
});

router.param('order', function*(p_order, p_next) {
	this.params.order = this.validate(p_order, lib.models.OpenOrder.VALIDATOR_ID.required());
	yield p_next;
});

router.get('/',
	lib.common.parseAuthToken.middleware(),
	lib.search
);

router.get('/ticker',
	lib.common.parseAuthToken.middleware(),
	lib.ticker
);

router.get('/:market',
	lib.common.parseAuthToken.middleware(),
	lib.view
);

router.get('/:market/trades',
	lib.common.parseAuthToken.middleware(),
	lib.trades
);

router.get('/:market/orders',
	lib.common.parseAuthToken.middleware(),
	lib.orders
);

router.use('/:market/openOrders',
	lib.common.parseExchangeToken.middleware(),
	lib.openOrders.routes(),
	lib.openOrders.allowedMethods()
);

router.use('/:market/openPosition',
	lib.common.parseExchangeToken.middleware(),
	lib.openPosition.routes(),
	lib.openPosition.allowedMethods()
);

router.use('/:market/orderTrades/:order',
	lib.common.parseExchangeToken.middleware(),
	lib.orderTrades
);

module.exports = router;
