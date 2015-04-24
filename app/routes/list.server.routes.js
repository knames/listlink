'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	list = require('../../app/controllers/list.server.controller');

module.exports = function(app) {
	// List Routes
	app.route('/list/:username')
		.get(users.requiresLogin, list.hasAuthorization, list.getLists)
		.post(users.requiresLogin, list.hasAuthorization, list.create);

  app.route('/edit/:editList')
    .put(users.requiresLogin, list.hasAuthorization, list.update)
    .delete(users.requiresLogin, list.hasAuthorization, list.remove);

	// Finish by binding the list middleware
	// app.param('username', list.getLists);
  // app.param('username', list.create);
  // app.param('editList', list.update);
  // app.param('editList', list.remove);
};
