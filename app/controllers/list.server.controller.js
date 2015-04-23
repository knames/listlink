'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	List = mongoose.model('List'),
	_ = require('lodash');




/**
 * Reads all the lists for the current username
 */
exports.getLists = function(req, res, username) {
  res.send('Attempted to get lists for ' + username);
};

/**
 * Creates a list for the current username
 */
exports.create = function(req, res, username) {
  res.send('Attempted to create list for ' + username);
};

/**
 * Update a list by ID
 */
exports.update = function(req, res, editList) {
  res.send('Attempted to update list ' + editList);
};

/**
 * Remove a list by ID
 */
exports.remove = function(req, res, editList) {
  res.send('Attempted to remove list ' + editList);
};

/**
 * Returns the current level of authorization of the validated user
 */
exports.hasAuthorization = function(req, res) {
  next();
};
