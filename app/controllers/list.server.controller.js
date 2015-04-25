'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	List = mongoose.model('List'),
	_ = require('lodash');




/**
 * Reads all the sublists for the given list
 */
exports.getLists = function(req, res) {
	List.find().populate('user', 'username').exec(function(err, lists) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(lists);
		}
	});
};

/**
 * Creates a list for the current username
 */
exports.create = function(req, res) {
	var list = new List(req.body);
	list.user = req.user;
	list.access = JSON.parse(req.access);

	list.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.send(list);
		}
	});
};

/**
 * Update a list by ID
 */
exports.update = function(req, res) {
	var list = req.list;

 	list = _.extend(list, req.body);

	list.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(list);
		}
	});
};

/**
 * Remove a list by ID
 */
exports.remove = function(req, res) {
	var list = req.list;

	list.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(list);
		}
	});
};

/**
 * Gets a single List based on its ID
 */
exports.getListByID = function(req, res, next, id) {
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Requested list is invalid'
		});
	}

	List.findById(id).populate().exec(function(err, list) {
		if (err) return next(err);
		if (!list) {
			return res.status(404).send({
				message: 'List not found'
			});
		}
		req.list = list;
		next();
	});
};

/**
 * Returns the current level of authorization of the validated user
 */
exports.hasAuthorization = function(req, res, next) {
	next();
};
