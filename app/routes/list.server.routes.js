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

	app.route('/root/:username')
		.get(users.requiresLogin, list.rootID)

	app.route('/list/id/:id')
		.get(users.requiresLogin, list.hasAuthorization, list.getListByID)

  app.route('/edit/:editList')
    .put(users.requiresLogin, list.hasAuthorization, list.update)
    .delete(users.requiresLogin, list.hasAuthorization, list.remove);


};
