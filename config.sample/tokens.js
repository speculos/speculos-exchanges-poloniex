'use strict';

const lib = {
	node:{
		path:require('path'),
		fs:require('fs')
	}
};

/**
	Token issued from the central authentication module.
*/
module.exports.auth = {};
module.exports.auth.algorithm = 'ES512';
module.exports.auth.keys = {};
module.exports.auth.keys.public = lib.node.fs.readFileSync(lib.node.path.resolve(__dirname, '..', 'keys', 'auth.pub.pem')).toString();
module.exports.auth.version = 'speculos-auth@1';

/**
	Token issued to hold remote exchange credentials.
*/
module.exports.self = {};
module.exports.self.algorithm = 'ES512';
module.exports.self.keys = {};
module.exports.self.keys.public = lib.node.fs.readFileSync(lib.node.path.resolve(__dirname, '..', 'keys', 'self.pub.pem')).toString();
module.exports.self.keys.private = lib.node.fs.readFileSync(lib.node.path.resolve(__dirname, '..', 'keys', 'self.pkey.pem')).toString();
module.exports.self.version = 1;
