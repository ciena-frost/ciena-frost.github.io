var fs = require('fs');
var child_process = require('child_process');
var chalk = require('chalk');
var path = require('path');
var mark_dir = "markdown"


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
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

var routing_string = "module.exports = [ \n";
dive(mark_dir);
routing_string += "];";
//console.log(routing_string);
fs.writeFileSync("config/routing.js", routing_string);

var list = [];
var stat = "";
function dive(dir) {
  // Read the directory
  list = fs.readdirSync(dir);
  list.forEach(function(file) {
    if(file.charAt(2) != "-")
      return;

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

      routing_string += "{id: '" + filename.replaceAll("[0-9][0-9][-]", "") +
            "', alias: '" + toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("-", " ")) +
            "', type: 'category', route: '" +
            path.replace(mark_dir + "/", "").replaceAll("/", ".").replaceAll("[0-9][0-9][-]", "") +
            "', items: [ \n";
      //write items: [
      dive(path);

      routing_string += "\n]}, // " + filename+ "\n"
    }

    else {

      // id: 'environment', alias: 'Environment', type: 'route', route: 'development.environment',

      var filename = file.replace(".md", "");

      routing_string += "\t{id: '" + filename.replaceAll("[0-9][0-9][-]", "") + "', alias: '" +
            toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("-", " ")) +
            "', type: 'route', route: '" +
            path.replace(mark_dir + "/", "").replaceAll("/", ".").replace(".md","").replaceAll("[0-9][0-9][-]", "") +
            "'},\n";

      // Call the action
      var pagePath = dir.replace(mark_dir, "app/pods") + "/" + file.replace(".md", "");

      //remove the order prefixes
      pagePath = pagePath.replaceAll("[0-9][0-9][-]", "");

      console.log(chalk.green.bold("Create Folder page: " + pagePath));

      console.log(chalk.blue.bold("Create Index Folder: " + pagePath + "/index"));

      if (!directoryExistsSync(pagePath + "/index")){
              mkdirpSync((pagePath + "/index").toLowerCase());
      }


      console.log(chalk.blue.bold("Create route.js: " + pagePath + "/index" + "/route.js"));
      var route_js_string = "import Ember from'ember';\nexport default Ember.Route.extend({\n\tbreadCrumb:{\n\t\ttitle:'"+
            filename.replaceAll("[0-9][0-9][-]", "") +"'\n\t}\n});"
      //  import Ember from 'ember';
      // export default Ember.Route.extend({
      // 	breadCrumb: {
      // 		title: 'design-conventions'
      // 	}
      // });

      fs.writeFileSync(pagePath + "/index" + "/route.js", route_js_string);
      // console.log(chalk.blue.bold("Create controller: " + pagePath + "/controller.js"));
      // var controllerString = "import Ember from'ember';
      // \nexport default Ember.Controller.extend({queryParams:['selectedTab'],selectedTab:
      // 'description',actions:{tabSelected(tab){this.set('selectedTab',tab)}}});"

      console.log(chalk.blue.bold("Create template: " + pagePath + "/template.hbs"));
      //{{markdown-to-html class="guide-markdown" markdown=(fr-markdown-file 'design-patterns/filtering')}}
      fs.writeFileSync(pagePath + "/template.hbs", "{{markdown-to-html class=\"guide-markdown\" " +
            "markdown=(fr-markdown-file '" +
            path.replace(".md", "").replace(mark_dir + "/", "")+
            "')}}");
    }

  });
};


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function fileExistsSync(filePath){
  try{
    return fs.statSync(filePath).isFile();
  }catch(err){
    return false;
  }
};
function directoryExistsSync(filePath){
  try{
    return fs.statSync(filePath).isDirectory();
  }catch(err){
    return false;
  }
};
function toTitleCase(str) {
  console.log(str);
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
