'use strict';

const lib = {
	deps:{
		koaRouter:require('koa-router')
	},
	search:require('./search'),
	create:require('./create'),
	remove:require('./remove')
};

let router = new lib.deps.koaRouter();

router.param('openOrder', function*(p_id, p_next) {
	this.params.openOrder = this.validate(p_id, lib.models.OpenOrder.VALIDATOR_ID.required());

	yield p_next;
});

router.get('/',
	lib.search
);

router.post('/',
	lib.create
);

router.delete('/:openOrder',
	lib.remove
);

module.exports = router;