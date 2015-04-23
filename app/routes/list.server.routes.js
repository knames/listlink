'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	list = require('../../app/controllers/list.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/list/:username')
		.get(users.requiresLogin, list.hasAuthorization, list.getLists)
		.post(users.requiresLogin, list.hasAuthorization, list.create);
    .put(users.requiresLogin, list.hasAuthorization, list.update);

  app.route('/list/:editList')
    .put(users.requiresLogin, list.hasAuthorization, list.update)
    .delete(users.requiresLogin, list.hasAuthorization, list.remove)

	// Finish by binding the article middleware
	app.param('username', list.getLists);
  app.param('editList', list.update);
};
