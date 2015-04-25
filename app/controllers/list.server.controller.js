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
 * Update a list by ID
 */
exports.update = function(req, res) {
  res.send('Attempted to update list' + req.head);
};

/**
 * Remove a list by ID
 */
exports.remove = function(req, res) {
  res.send('Attempted to remove list' + req.head);
};

exports.getListByID = function(req, res, next, id) {
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Requested list is invalid'
		});
	}

	List.findById(id).populate('user', 'content', 'type').exec(function(err, list) {
		if (err) return next(err);
		if (!list) {
			return res.status(404).send({
				message: 'Article not found'
			});
		}
		req.article = article;
		next();
	});
};

/**
 * Returns the current level of authorization of the validated user
 */
exports.hasAuthorization = function(req, res, next) {
	next();
};
