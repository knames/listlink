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
exports.getLists = function(req, res) {
  res.send('Attempted to get lists' + req.head);
};

/**
 * Creates a list for the current username
 */
exports.create = function(req, res) {
  res.send('Attempted to create list' + req.head);
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

/**
 * Returns the current level of authorization of the validated user
 */
exports.hasAuthorization = function(req, res, next) {
  next();
};
