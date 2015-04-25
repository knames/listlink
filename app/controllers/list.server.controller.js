'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	List = mongoose.model('List'),
	Users = mongoose.model('Users'),
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

	// For some reason the server likes to insert escape characters here, so we
	// must remove them manually. Step 1, convert to string.
	var workingJson = JSON.stringify(list.access);

	// Removing all backslashes, they can't be in emails.
	workingJson = workingJson.replace("\\", "");

	// Removing the first and second-to-last character; these are unnecessary
	// quotes.
	workingJson = workingJson.replace("\"\"", "\"");

	list.access = JSON.parse(workingJson);

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

exports.rootID = function(req, res, username) {
	Users.find().exec(function(err, users) {
		if (err) {
			return res.status(404).send({
				message: 'Could not find any users'
			});
		}
		// Array of references to all root lists
		var allUsers = users.map(function(user) { return user._id; });

		List.findOne({$and: [{user: {$in: allUsers}}, {root: true}]}, function(err, doc) {
			if (err) {
				return res.status(404).send({
					message: 'Root list not found'
				});
			}
			res.send(doc._id);
		});
	}
}

/**
 * Gets a single List based on its ID
 */
exports.getListByID = function(req, res, next, id) {
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Requested list is invalid'
		});
	}

	List.findById(id).exec(function(err, list) {
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
