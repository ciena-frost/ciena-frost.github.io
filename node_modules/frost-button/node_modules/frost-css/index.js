/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
	name: 'frost-css',

	blueprintsPath: function() {
		return path.join(__dirname, 'blueprints');
	}
};
