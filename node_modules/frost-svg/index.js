/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');

var flatiron = require('broccoli-flatiron');
var fs = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');
var svgstore = require('broccoli-svgstore');

module.exports = {
	name: 'frost-svg',

  included: function(app) {
    this._super.included(app);
  },

	treeForAddon: function(tree) {
		// Flatten the svgs into js imports with inline svg using flatiron and merge the result into the addon tree
		var svgPaths = [];

		var addonSvgRoot = path.join(this.root, 'public', 'svgs');
		if (fs.existsSync(addonSvgRoot)) {
			svgPaths.push(addonSvgRoot);
		}

		if (this.project.name() !== 'frost-svg') {
			var appSvgRoot = path.join(this.project.root, 'public', 'svgs');
			if (fs.existsSync(appSvgRoot)) {
				svgPaths.push(appSvgRoot);
			}
		}

		var dummySvgRoot = path.join(this.project.root, 'tests', 'dummy', 'public', 'svgs');
		if (fs.existsSync(dummySvgRoot)) {
			svgPaths.push(dummySvgRoot);
		}

		if (svgPaths.length > 0) {
			var svgFunnel = new Funnel(mergeTrees(svgPaths), {
				include: [new RegExp(/\.svg$/)]
			});

			var flattenedSvgs = flatiron(svgFunnel, {
				outputFile: 'svgs.js',
				trimExtensions: true
			});

			tree = mergeTrees([tree, flattenedSvgs]);
		}

		return this._super.treeForAddon.call(this, tree);
	},

	treeForPublic: function() {
		var svgRoot = path.join(this.root, 'public', 'svgs');
		return svgstore(new Funnel(svgRoot), {outputFile: "/assets/frost-svgs.svg"});
	}
};
