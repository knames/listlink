'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.createparent = function(req, res) {
	res.render('createparent', {
		user: req.user || null,
		request: req
	});
};
