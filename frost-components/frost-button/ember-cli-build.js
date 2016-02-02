/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

function testGenerator(relativePath, errors) {
  if (errors) {
    errors = '\\n' + this.escapeErrorString(errors);
  }

  var expectString = relativePath + ' should pass JSCS' + errors;

  return [
    'describe("JSCS - ' + relativePath + '", function () {',
      'it("should pass jscs", function () {',
        'expect(' + !errors + ', "' + expectString + '").to.be.ok;',
      '});',
    '});'
  ].join('\n');
}

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
	  sassOptions: {
		  includePaths: [
			  'bower_components/bourbon/app/assets/stylesheets',
			  'node_modules/frost-css/styles'
		  ]
	  },
    jscsOptions: {
      testGenerator: testGenerator
    }
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
