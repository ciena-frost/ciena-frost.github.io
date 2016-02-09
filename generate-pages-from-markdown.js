String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

///////////////////////////MAIN////////////////////////////////
var fs = require('fs');
var child_process = require('child_process');
var chalk = require('chalk');
var path = require('path');
var mark_dir = "markdown";
var routing_string = "module.exports = [\n";

dive(mark_dir);

routing_string += "];";

//debug console.log(routing_string);
fs.writeFileSync("config/routing.js", routing_string);
//////////////////////////////////////////////////////////////

function dive(dir) {
  var list = [];
  var stat = "";
  var fileCount = 0;
  // Read the directory
  list = fs.readdirSync(dir);
  list.forEach(function (file) {
    if (file.charAt(2) != "-") {
      console.log("\nFile: " + file + " does not have a proper page order prefix in its name. " +
        "The page will not be generated.\n")
      return;
    }

    // Full path of that file
    var path = dir + "/" + file;

    // Get the file's stats
    stat = fs.statSync(path);

    // If the file is a directory
    if (stat && stat.isDirectory()) {
      // Dive into the directory
      //debug
//      console.log(chalk.red.bold("Directory: " + path))
      var DirectoryDepth = (path.match(/\//g) || []).length;
      fileCount = fs.readdirSync(path).length;
      var filename = file.replace(".md", "");

      routing_string += "{id: '" + filename.replaceAll("[0-9][0-9][-]", "") +
        "', alias: '" + toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("-", " ")) +
        "', type: 'category', route: '" +
        path.replace(mark_dir + "/", "").replaceAll("/", ".").replaceAll("[0-9][0-9][-]", "") +
        "', items: [\n";

      dive(path);

      routing_string += "\n]}, // " + filename + "\n"
      if (DirectoryDepth === 1) {
        var flat_route = path.replace(mark_dir, "app/pods").replaceAll("[0-9][0-9][-]", "") +"/index"
        if (!directoryExistsSync(flat_route)) {
          mkdirpSync((flat_route).toLowerCase());
        }

        //debug console.log(chalk.blue.bold("Create route.js: " + pagePath + "/index" + "/route.js"));
        var flat_route_js_string = "import Ember from 'ember'\nexport default Ember.Route.extend({\n })\n"
         fs.writeFileSync(flat_route + "/route.js", flat_route_js_string);
      }
    } else {
      fileCount++;
      var filename = file.replace(".md", "");
      if (fileCount >= list.length) {

        routing_string += "\t{id: '" + filename.replaceAll("[0-9][0-9][-]", "") + "', alias: '" +
          toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("-", " ")) +
          "', type: 'route', route: '" +
          path.replace(mark_dir + "/", "").replaceAll("/", ".").replace(".md", "").replaceAll("[0-9][0-9][-]", "") +
          "'}";
      } else {
        routing_string += "\t{id: '" + filename.replaceAll("[0-9][0-9][-]", "") + "', alias: '" +
          toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("-", " ")) +
          "', type: 'route', route: '" +
          path.replace(mark_dir + "/", "").replaceAll("/", ".").replace(".md", "").replaceAll("[0-9][0-9][-]", "") +
          "'},\n";
      }
      var pagePath = dir.replace(mark_dir, "app/pods") + "/" + file.replace(".md", "");

      //remove the order prefixes
      pagePath = pagePath.replaceAll("[0-9][0-9][-]", "");

      //debug console.log(chalk.green.bold("Create Folder page: " + pagePath));
      //debug console.log(chalk.blue.bold("Create Index Folder: " + pagePath + "/index"));

      if (!directoryExistsSync(pagePath)) {
        mkdirpSync((pagePath).toLowerCase());
      }

      //debug console.log(chalk.blue.bold("Create route.js: " + pagePath + "/index" + "/route.js"));
      var route_js_string = "import Ember from 'ember'\nexport default Ember.Route.extend({\n  breadCrumb: {\n    title: '" +
        toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("[-]", " ")) + "'\n  }\n })\n"

      fs.writeFileSync(pagePath + "/route.js", route_js_string);

      //debug console.log(chalk.blue.bold("Create controller: " + pagePath + "/controller.js"));
      //debug console.log(chalk.blue.bold("Create template: " + pagePath + "/template.hbs"));

      var template_content = "";
      var content = fs.readFileSync(path, 'utf8');

      template_content += "\n<div class=\"md\">";
      template_content += "\n\t<div class=\"content\">";
      template_content += "\n\t\t{{markdown-to-html class=\"guide-markdown\" ghCodeBlocks=true ";
      template_content += "markdown=(fr-markdown-file-strip-number-prefix '";
      template_content += path.replace(".md", "").replace(mark_dir + "/", "").replaceAll("[0-9][0-9][-]", "") + "')}} ";
      template_content += "\n\t</div>";
      template_content += "\n\t<div class='right-col'>";
      template_content += "\n\t\t<div id='md-scrollspy'>";

      var insideCodeSnippet = false;
      fs.readFileSync(path).toString().split('\n').forEach(function (line) {
        if(line.match('```') && !insideCodeSnippet)
          insideCodeSnippet = true;
        else if(line.match('```') && insideCodeSnippet)
          insideCodeSnippet = false;
        else if (line.match("^#") && !insideCodeSnippet) {
          line = line.replaceAll("#", "");
          var header = line;
          var id = "#" + line.replaceAll(" ", "").toLowerCase().replaceAll('/\W+/g', '');
          template_content += "\n\t\t\t{{#scroll-to to=\"" + id + "\"}}" + header + "{{/scroll-to}}";
        }
      });

      template_content += "\n\t\t</div>";
      template_content += "\n\t</div>";
      template_content += "\n</div>";

      fs.writeFileSync(pagePath + "/template.hbs", template_content);
    }

  });
}


String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

function fileExistsSync(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

function directoryExistsSync(filePath) {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function mkdirSync(path) {
  try {
    fs.mkdirSync(path);
  } catch (e) {
    if (e.code != 'EEXIST') throw e;
  }
}

function mkdirpSync(dirpath) {
  var parts = dirpath.split(path.sep);
  for (var i = 1; i <= parts.length; i++) {
    mkdirSync(path.join.apply(null, parts.slice(0, i)));
  }
}
