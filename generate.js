var fs = require('fs');
var child_process = require('child_process');
var chalk = require('chalk');
var path = require('path');
var mark_dir = "markdown"
var files = [];

var routing_string = "module.exports = [ \n";


console.log("Hello");
dive(mark_dir);
routing_string += "];";
debugger;
console.log(routing_string);
var list = [];
var stat = "";
function dive(dir) {
  // Read the directory
  list = fs.readdirSync(dir);
  list.forEach(function(file) {
    // Full path of that file
    var path = dir + "/" + file;
    // Get the file's stats
    stat = fs.statSync(path);
    // console.log(stat);
    // If the file is a directory
    if (stat && stat.isDirectory()) {
      // Dive into the directory
      console.log(chalk.red.bold("Directory: " + path.replace(mark_dir + "/", "app/pods/")));
      // uncomment when ready
      // mkdirpSync(path.replace(mark_dir + "/","app/pods/"));
      // id: 'overview', alias: 'Overview', type: 'category', route: 'overview',
      var filename = file.replace(".md", "");
      console.log(list);
      routing_string += "{id: '" + filename + "', alias: '" + toTitleCase(filename) + "', type: 'category', route: '" + path.replace(mark_dir + "/", "").replace("/", ".") + "', items: [ \n";
      //write items: [
      dive(path);

      routing_string += "\n]},\n";
    } else {
      // id: 'environment', alias: 'Environment', type: 'route', route: 'development.environment',
      var filename = file.replace(".md", "");
      routing_string += "\t{id: '" + filename + "', alias: '" + toTitleCase(filename) + "', type: 'route', route: '" + path.replace(mark_dir + "/", "").replace("/", ".").replace(".md","") + "'},\n";
      // Call the action
      var pagePath = dir.replace(mark_dir + "/", "app/pods/") + "/" + file.replace(".md", "");
      console.log(chalk.green.bold("Create Folder page: " + pagePath));

      console.log(chalk.blue.bold("Create Index Folder: " + pagePath + "/index"));

      console.log(chalk.blue.bold("Create route.js: " + pagePath + "/index" + "/route.js"));

      console.log(chalk.blue.bold("Create controller: " + pagePath + "/controller.js"));

      console.log(chalk.blue.bold("Create template: " + pagePath + "/template.hbs"));
    }

  });
};

var mkdirSync = function(path) {
  try {
    fs.mkdirSync(path);
  } catch (e) {
    if (e.code != 'EEXIST') throw e;
  }
}

var mkdirpSync = function(dirpath) {
  var parts = dirpath.split(path.sep);
  for (var i = 1; i <= parts.length; i++) {
    mkdirSync(path.join.apply(null, parts.slice(0, i)));
  }
}

function toTitleCase(str) {
  console.log(str);
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
