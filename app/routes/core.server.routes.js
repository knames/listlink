'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/createparent').get(core.createparent);
	app.route('/showlists').get(core.showlists);
};
