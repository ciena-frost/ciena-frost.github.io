/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'bower_components/bourbon/app/assets/stylesheets',
        'styles'
      ]
    }
  });

	return app.toTree();
};
