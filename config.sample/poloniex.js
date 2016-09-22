'use strict';

/**
	URL to the Poloniex PUSH API.
*/
module.exports.URL_PUSH = 'wss://api.poloniex.com';

/**
The Poloniex PUSH realm.
*/
module.exports.PUSH_REALM = 'realm1';

/**
	URL to the Poloniex public API (to track market data).
*/
module.exports.URL_PUBLIC = 'https://poloniex.com/public';

/**
	URL to the Poloniex trading API.
*/
module.exports.URL_TRADING = 'https://poloniex.com/tradingApi';

/**
	Minimal trades amount value.
*/
module.exports.MINIMAL_AMOUNT = 0.0001;

/**
	Fees strategies.
*/
module.exports.FEES = {
	strategy:'MAKER_TAKER',
	maker:0.15 / 100.0,
	taker:0.25 / 100.0
};

/**
	Available markets.
*/
module.exports.MARKETS = [
	{currency:'BTC', asset:'1CR', types:['EXCHANGE']},
	{currency:'BTC', asset:'AMP', types:['EXCHANGE']},
	{currency:'BTC', asset:'BBR', types:['EXCHANGE']},
	{currency:'BTC', asset:'BCN', types:['EXCHANGE']},
	{currency:'BTC', asset:'BCY', types:['EXCHANGE']},
	{currency:'BTC', asset:'BELA', types:['EXCHANGE']},
	{currency:'BTC', asset:'BITCNY', types:['EXCHANGE']},
	{currency:'BTC', asset:'BITS', types:['EXCHANGE']},
	{currency:'BTC', asset:'BLK', types:['EXCHANGE']},
	{currency:'BTC', asset:'BLOCK', types:['EXCHANGE']},
	{currency:'BTC', asset:'BTCD', types:['EXCHANGE']},
	{currency:'BTC', asset:'BTM', types:['EXCHANGE']},
	{currency:'BTC', asset:'BTS', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'BURST', types:['EXCHANGE']},
	{currency:'BTC', asset:'C2', types:['EXCHANGE']},
	{currency:'BTC', asset:'CGA', types:['EXCHANGE']},
	{currency:'BTC', asset:'CLAM', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'CURE', types:['EXCHANGE']},
	{currency:'BTC', asset:'DASH', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'DCR', types:['EXCHANGE']},
	{currency:'BTC', asset:'DGB', types:['EXCHANGE']},
	{currency:'BTC', asset:'DIEM', types:['EXCHANGE']},
	{currency:'BTC', asset:'DOGE', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'EMC2', types:['EXCHANGE']},
	{currency:'BTC', asset:'ETC', types:['EXCHANGE']},
	{currency:'BTC', asset:'ETH', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'EXP', types:['EXCHANGE']},
	{currency:'BTC', asset:'FCT', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'FLDC', types:['EXCHANGE']},
	{currency:'BTC', asset:'FLO', types:['EXCHANGE']},
	{currency:'BTC', asset:'GAME', types:['EXCHANGE']},
	{currency:'BTC', asset:'GEO', types:['EXCHANGE']},
	{currency:'BTC', asset:'GRC', types:['EXCHANGE']},
	{currency:'BTC', asset:'HUC', types:['EXCHANGE']},
	{currency:'BTC', asset:'HZ', types:['EXCHANGE']},
	{currency:'BTC', asset:'IOC', types:['EXCHANGE']},
	{currency:'BTC', asset:'LBC', types:['EXCHANGE']},
	{currency:'BTC', asset:'LSK', types:['EXCHANGE']},
	{currency:'BTC', asset:'LTBC', types:['EXCHANGE']},
	{currency:'BTC', asset:'LTC', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'MAID', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'MMNXT', types:['EXCHANGE']},
	{currency:'BTC', asset:'MYR', types:['EXCHANGE']},
	{currency:'BTC', asset:'NAUT', types:['EXCHANGE']},
	{currency:'BTC', asset:'NAV', types:['EXCHANGE']},
	{currency:'BTC', asset:'NBT', types:['EXCHANGE']},
	{currency:'BTC', asset:'NEOS', types:['EXCHANGE']},
	{currency:'BTC', asset:'NMC', types:['EXCHANGE']},
	{currency:'BTC', asset:'NOBL', types:['EXCHANGE']},
	{currency:'BTC', asset:'NOTE', types:['EXCHANGE']},
	{currency:'BTC', asset:'NSR', types:['EXCHANGE']},
	{currency:'BTC', asset:'NXT', types:['EXCHANGE']},
	{currency:'BTC', asset:'OMNI', types:['EXCHANGE']},
	{currency:'BTC', asset:'PINK', types:['EXCHANGE']},
	{currency:'BTC', asset:'POT', types:['EXCHANGE']},
	{currency:'BTC', asset:'PPC', types:['EXCHANGE']},
	{currency:'BTC', asset:'QBK', types:['EXCHANGE']},
	{currency:'BTC', asset:'QORA', types:['EXCHANGE']},
	{currency:'BTC', asset:'QTL', types:['EXCHANGE']},
	{currency:'BTC', asset:'RADS', types:['EXCHANGE']},
	{currency:'BTC', asset:'RBY', types:['EXCHANGE']},
	{currency:'BTC', asset:'RDD', types:['EXCHANGE']},
	{currency:'BTC', asset:'RIC', types:['EXCHANGE']},
	{currency:'BTC', asset:'SBD', types:['EXCHANGE']},
	{currency:'BTC', asset:'SC', types:['EXCHANGE']},
	{currency:'BTC', asset:'SDC', types:['EXCHANGE']},
	{currency:'BTC', asset:'SJCX', types:['EXCHANGE']},
	{currency:'BTC', asset:'STEEM', types:['EXCHANGE']},
	{currency:'BTC', asset:'STR', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'SYNC', types:['EXCHANGE']},
	{currency:'BTC', asset:'SYS', types:['EXCHANGE']},
	{currency:'BTC', asset:'UNITY', types:['EXCHANGE']},
	{currency:'BTC', asset:'VIA', types:['EXCHANGE']},
	{currency:'BTC', asset:'VOX', types:['EXCHANGE']},
	{currency:'BTC', asset:'VRC', types:['EXCHANGE']},
	{currency:'BTC', asset:'VTC', types:['EXCHANGE']},
	{currency:'BTC', asset:'XCN', types:['EXCHANGE']},
	{currency:'BTC', asset:'XCP', types:['EXCHANGE']},
	{currency:'BTC', asset:'XDN', types:['EXCHANGE']},
	{currency:'BTC', asset:'XEM', types:['EXCHANGE']},
	{currency:'BTC', asset:'XMR', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'XRP', types:['EXCHANGE', 'MARGIN']},
	{currency:'BTC', asset:'XVC', types:['EXCHANGE']},
	{currency:'BTC', asset:'XBC', types:['EXCHANGE']},
	{currency:'BTC', asset:'XMG', types:['EXCHANGE']},
	{currency:'BTC', asset:'XPM', types:['EXCHANGE']},
	{currency:'BTC', asset:'XST', types:['EXCHANGE']},

	{currency:'ETH', asset:'ETC', types:['EXCHANGE']},
	{currency:'ETH', asset:'LSK', types:['EXCHANGE']},
	{currency:'ETH', asset:'STEEM', types:['EXCHANGE']},

	{currency:'XMR', asset:'BBR', types:['EXCHANGE']},
	{currency:'XMR', asset:'BCN', types:['EXCHANGE']},
	{currency:'XMR', asset:'BLK', types:['EXCHANGE']},
	{currency:'XMR', asset:'BTCD', types:['EXCHANGE']},
	{currency:'XMR', asset:'DASH', types:['EXCHANGE']},
	{currency:'XMR', asset:'DIEM', types:['EXCHANGE']},
	{currency:'XMR', asset:'LTC', types:['EXCHANGE']},
	{currency:'XMR', asset:'MAID', types:['EXCHANGE']},
	{currency:'XMR', asset:'NXT', types:['EXCHANGE']},
	{currency:'XMR', asset:'QORA', types:['EXCHANGE']},
	{currency:'XMR', asset:'XDN', types:['EXCHANGE']},

	{currency:'USDT', asset:'BTC', types:['EXCHANGE']},
	{currency:'USDT', asset:'DASH', types:['EXCHANGE']},
	{currency:'USDT', asset:'ETC', types:['EXCHANGE']},
	{currency:'USDT', asset:'ETH', types:['EXCHANGE']},
	{currency:'USDT', asset:'LTC', types:['EXCHANGE']},
	{currency:'USDT', asset:'NXT', types:['EXCHANGE']},
	{currency:'USDT', asset:'STR', types:['EXCHANGE']},
	{currency:'USDT', asset:'XMR', types:['EXCHANGE']},
	{currency:'USDT', asset:'XRP', types:['EXCHANGE']}
];