'use strict';

const lib = {
	deps:{
		koaRouter:require('koa-router')
	},
	view:require('./view'),
	modify:require('./modify'),
	remove:require('./remove')
};

let router = new lib.deps.koaRouter();

router.get('/',
	lib.view
);

router.post('/',
	lib.modify
);

router.delete('/',
	lib.remove
);

module.exports = router;
