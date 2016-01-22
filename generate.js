#!/usr/bin/env node
 //Written By Seena Rowhani (& Stackoverflow ;) )
//With Love <3
(function (fs, exec, chalk, _dir, _args) {
  "use strict";
  var fileTree = {};
	var routes = [];
  var _arguments = {};

  (function parseArguments(_arguments){
    _args.forEach(function(e) {
      var map = e.toLowerCase().replace(/ /g, '').split('=');
      _arguments[map[0]] = map[1];
    });
  })(_arguments);

	var walk = function(path, obj) {
		var dir = fs.readdirSync(path);
		for (var i = 0; i < dir.length; i++) {
			var name = dir[i];
			var target = path + '/' + name;
			var stats = fs.statSync(target);
			var s = target.substring(_dir.length, target.length);
			var c = s.replace(/\//g, '.').substr(1);
			var o = {
				route: c,
				url: s
			}
			if (stats.isDirectory()) {
				routes.push(o);

				walk(target, obj[o.route] = {
					route: o.route,
					relative: c.substr(c.lastIndexOf('.') + 1),
					items: []
				});
			} else if (stats.isFile()) {
				try {
					var config = require(path + '/config');
					Object.keys(config).forEach(function(e) {
						routes[routes.length - 1][e] = obj[e] = config[e];
					});
				} catch (e) {
					console.log(chalk.red.bold(e));
				}
			}
		}
	};
	walk(_dir, fileTree);
	var itemify = function(obj) {
		if (!(obj instanceof Object) || obj instanceof Array) return;
		var item = obj;
		var keys = Object.keys(item);
		keys.forEach(function(key) {
			itemify(item[key]);
			item.alias = item.alias || item.relative.replace(/\-/g, ' ');
			item.type = item.type || 'route';

			if (['route', 'type', 'alias', 'items', 'keywords', 'relative'].reduce(function(b, c) {
					return b && c !== key
				}, true)) {

				if (item.items instanceof Array) {
					item.type = 'category';
					item['items'].push(item[key]);
					delete item[key];
				}
			}
		});
	}
	var x = Object.keys(fileTree).map(function(e) {
		itemify(fileTree[e]);
		fileTree[e].type = 'category';
		return fileTree[e];
	});

  (function writeConfig(){
    [{
  		path: './config/routing.js',
  		prefix: 'module.exports = '
  	}, {
  		path: './app/pods/application/menu.js',
  		prefix: 'export default '
  	}].forEach(function(e) {
  		fs.writeFile(e.path, e.prefix + JSON.stringify(x, null, 2), function(e) {
  			if (e) {
  				console.log(chalk.red.bold(e));
  			}
  		});
  	});
  })();

	routes.forEach(function(route) {
		var podsDir = 'app/pods';
		var mkdir = 'mkdir ' + podsDir + route.url;
		if (route.route.indexOf('frost-components') > -1) return;
	// 	exec(mkdir, function(a, b, c) {
	// 		if (c) {
	// 			throw c;
	// 		}
	// 		exec(mkdir + "/index", function(d, e, f) {
	// 			fs.writeFile(
	// 				podsDir + route.url + '/index/route.js',
	// 				"import Ember from 'ember';\n" +
	// 				"export default Ember.Route.extend({" +
	// 				"\n\tbreadCrumb: {\n\t\t" +
	// 				"title: '".concat(route.alias || route.url.split('/')[1]) +
	// 				"'\n\t}" +
	// 				"\n});",
	// 				function(e) {
	// 					if (e) {
	// 						console.log(chalk.red.bold(e));
	// 					}
	// 				}
	// 			);
	// 			fs.writeFile(
	// 				podsDir + route.url + '/template.hbs',
	// 				route.type === 'route' ? "{{mark-down file=file}}\n{{outlet}}" : "{{outlet}}",
	// 				function(e) {
	// 					if (e) {
	// 						console.log(chalk.red.bold(e));
	// 					}
	// 				}
	// 			);
	// 			fs.writeFile(
	// 				podsDir + route.url + '/controller.js',
	// 				"import Ember from 'ember';\n" +
	// 				"export default Ember.Controller.extend({" +
	// 				"\n\tfile: {\n\t\t" +
	// 				"name: '".concat(route.alias || route.url.split('/')[1]) + "',\n\t\t" +
	// 				"path: '".concat("docs" + route.url + "/description.md") +
	// 				"'\n\t}" +
	// 				"\n});",
	// 				function(e) {
	// 					if (e) {
	// 						console.log(chalk.red.bold(e));
	// 					}
	// 				}
	// 			);
	// 		})
	// 	});
	});
})(
	require('fs'),
	require('child_process').exec,
	require('chalk'),
	'./public/docs',
	process.argv.slice(2)
);
