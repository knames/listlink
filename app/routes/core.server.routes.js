'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	app.route('/').get(core.index);

	if(window.history && window.history.pushState){
    $locationProvider.html5Mode(true);
  }
};
