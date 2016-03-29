String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

///////////////////////////MAIN////////////////////////////////
var fs = require('fs');
var child_process = require('child_process');
var chalk = require('chalk');
var path = require('path');
var toSource = require('tosource')
var removeMd = require('remove-markdown-and-html');
var mark_dir = "markdown";
var exec = require('sync-exec');
var request = require('sync-request');
var options = {
  'headers': {
    'user-agent': 'ciena-frost',
    'Authorization': 'token ' + process.env.ghToken
  }
};
var route_array = []
dive(mark_dir, route_array);
console.log("Routing:\n" + toSource(route_array));
var contributors_route = { id:"contributing",
    alias:"Contributors",
    type:"route",
    route:"contributors",
    items:[ { id:"contributors",
        alias:"Contributors",
        type:"route",
        route:"contributors.contributors" },
      { id:"contributor",
        alias:"Contributor",
        type:"route",
        route:"contributors.contributor" } ] }
route_array.push(contributors_route)
//debug console.log(routing_string);
fs.writeFileSync("config/routing.js", "module.exports = \n" + toSource(route_array) + ";");
//////////////////////////////////////////////////////////////

function dive(dir, array) {
  var list = [];
  var stat = "";
  var fileCount = 0;
  // Read the directory
  list = fs.readdirSync(dir);
  list.forEach(function (file) {
    var keywords = ""
    var route = {}; // build route than push to route array
    var route2 = undefined
    if (file.charAt(2) != "-") {
      console.log("\nFile: " + file + " does not have a proper page order prefix in its name. " +
        "The page will not be generated.\n")
      return;
    }

    // Full path of that file
    var path = dir + "/" + file;

    console.log("Reading Path: " + path)
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
      route.id = filename.replaceAll("[0-9][0-9][-]", "").toLowerCase()
      route.alias = toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("-", " "))
      route.type = 'category'
      route.route = path.replace(mark_dir + "/", "").replaceAll("/", ".").replaceAll("[0-9][0-9][-]", "").toLowerCase()
      route.items = []


      dive(path, route.items);

      array.push(route)
      if (DirectoryDepth === 1) {
        var flat_route = path.replace(mark_dir, "app/pods").replaceAll("[0-9][0-9][-]", "") + "/index"
        if (!directoryExistsSync(flat_route.toLowerCase())) {
          mkdirpSync((flat_route).toLowerCase());
        }

        //debug console.log(chalk.blue.bold("Create route.js: " + pagePath + "/index" + "/route.js"));
        var flat_route_js_string = "import Ember from 'ember'\nexport default Ember.Route.extend({\n})\n"
        fs.writeFileSync(flat_route.toLowerCase() + "/route.js", flat_route_js_string);
      }
    } else {
      fileCount++;
      var filename = file.replace(".md", "");
      route.id = filename.replaceAll("[0-9][0-9][-]", "").toLowerCase()
      route.alias = toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("-", " "))
      route.type = 'route'
      route.route = path.replace(mark_dir + "/", "").replaceAll("/", ".").replace(".md", "").replaceAll("[0-9][0-9][-]", "").toLowerCase()
      var pagePath = dir.replace(mark_dir, "app/pods") + "/" + file.replace(".md", "");

      //remove the order prefixes
      pagePath = pagePath.replaceAll("[0-9][0-9][-]", "");

      //debug console.log(chalk.green.bold("Create Folder page: " + pagePath));
      //debug console.log(chalk.blue.bold("Create Index Folder: " + pagePath + "/index"));

      if (!directoryExistsSync(pagePath.toLowerCase())) {
        mkdirpSync((pagePath).toLowerCase());
      }

      //debug console.log(chalk.blue.bold("Create route.js: " + pagePath + "/index" + "/route.js"));
      var route_js_string = "import Ember from 'ember'\nexport default Ember.Route.extend({\n  breadCrumb: {\n    title: '" +
        toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("[-]", " ")) + "'\n  },"
      route_js_string += `
  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      controller.set('section', null)
    }
  },
  actions: {
    didTransition: function () {
      Ember.run.schedule('afterRender', this, function () {
        if (this.controller.get('section') != null || this.controller.get('section') === '') {
          try {
            $('html, body').animate({
              scrollTop: $('#' + this.controller.get('section')).offset().top - (0.125 * $(window).height())
            }, 200)
          } catch (err) {
            // do nothing
          }
        }
        const controller = this.controllerFor('application')
        controller.get('target').send('beautify')
      })
    }
  }`

      route_js_string += "\n})\n"

      fs.writeFileSync(pagePath.toLowerCase() + "/route.js", route_js_string);

      //Create controller.js
      var controller_js_string = `import Ember from 'ember'

export default Ember.Controller.extend({
  queryParams: ['section'],
  section: null
})
`
      fs.writeFileSync(pagePath.toLowerCase() + "/controller.js", controller_js_string);
      //debug console.log(chalk.blue.bold("Create controller: " + pagePath + "/controller.js"));
      //debug console.log(chalk.blue.bold("Create template: " + pagePath + "/template.hbs"));

      var template_content = "";
      template_content += "\n<div class=\"md\">";
      template_content += "\n\t<div class=\"content-col\">";
      template_content += "\n\t\t{{markdown-to-html class=\"guide-markdown\" ghCodeBlocks=true ";
      template_content += "markdown=(fr-markdown-file-strip-number-prefix '";
      template_content += path.replace(".md", "").replace(mark_dir + "/", "").replaceAll("[0-9][0-9][-]", "") + "')}} ";
      template_content += "\n\t\t{{#scroll-spy}}";

      var insideCodeSnippet = false;
      var mapScorllSpyCounter = new Map();
      fs.readFileSync(path).toString().split('\n').forEach(function (line) {
        if (line.match('```') && !insideCodeSnippet)
          insideCodeSnippet = true;
        else if (line.match('```') && insideCodeSnippet)
          insideCodeSnippet = false;
        else if (line.match("^#") && !insideCodeSnippet && line.length <= 50) {
          var hlevel = line.substring(0, 3).match(/#/g).length
          line = line.replaceAll("#", "");
          var header = removeMd(line);

          //          keywords.push(header.trim())
          var id = "#" + line.replaceAll(" ", "").toLowerCase().replace(/\W+/g, '');
          if (mapScorllSpyCounter.has(id)) {
            var value = mapScorllSpyCounter.get(id)
            value++
            id += '-' + value
            mapScorllSpyCounter.set(id, value)
          } else {
            mapScorllSpyCounter.set(id, 0)
          }
          template_content += "\n\t\t\t{{#scroll-to id=\"" + id + "\" class=\"h" + hlevel + "\"}}" + header + "{{/scroll-to}}";
        }
        //        }else {
        //          var header = removeMd(line);
        //          keywords.push(header.trim())
        //        }
      });

      var md_content = fs.readFileSync(path).toString()
      md_content = removeMd(md_content)
      md_content = md_content.match(/\w+/g)
      if (md_content === null){
        keywords = ''
      }else {
        md_content.forEach(function (word) {
        keywords += word.toLowerCase() + " "
      })

      }

      template_content += "\n\t\t{{/scroll-spy}}";
      template_content += "\n\t</div>";
      template_content += "\n\t<div class='footer'>\n"
      template_content += "\t\t<div class='info'>\n\t\t\t<div>\n\t\t\t\t<div class='contributors'>\n\t\t\t\t\t<span " + "class=\"footerHeading\"></span><div class='contributors-list'>";
      template_content += "</div>\n\t\t\t</div>\n\t\t\t<div class='connect'>\n\t\t\t\t<span class=\"footerHeading\"></span>";
      template_content += "\n\t\t\t\t\t \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br/>\n\t\t</div>";
      template_content += "\n\t\t<div class='copyright'>\n\t\t\t\n\t\t</div>\n\t</div>";
      template_content += "\n</div>";
      route.keywords = keywords
      array.push(route) // push route to routing.js array

      fs.writeFileSync(pagePath.toLowerCase() + "/template.hbs", template_content);
    }
  });
}


String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

function getContributorsOfFile(filePath) {
  var contributorMap = new Map();
  var log = exec('git log --numstat ' + filePath);
  var arr_log = log.stdout.split(/commit [0-9|a-z]+\s*/i);
  var authorRegexExp = /Author:\s([a-z|\s|,]*)/i;
  var linesAddedDeletedRegexExp = /([0-9]+)\s+([0-9]+)\s+markdown/i;
  arr_log.forEach(function (commit) {
    var author = commit.match(/Author: ([a-z|\s|,]*)/i);
    if (author !== null && author[1] !== "travis-ci-ciena") {
      var name = formatName(author[1]);
      var linesAddedDeletedMatches = commit.match(/([0-9]+)\s+([0-9]+)\s+markdown/i);
      if (contributorMap.has(name)) {
        contributorMap.set(name, contributorMap.get(name) + parseInt(linesAddedDeletedMatches[1]) + parseInt(linesAddedDeletedMatches[2]));
      } else if (linesAddedDeletedMatches !== null) {
        console.log(linesAddedDeletedMatches);
        contributorMap.set(name, parseInt(linesAddedDeletedMatches[1]) + parseInt(linesAddedDeletedMatches[2]));
      }
    }
  })
  console.log(contributorMap)
  return contributorMap;
}

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

function formatName(name) {
  var match = name.match(/([a-z]+)[,\s|\s]*/ig);
  if (name.indexOf(",") > -1) {
    return match[1].trim() + " " + match[0].replace(",", "").trim();
  } else if (match.length >= 2) {
    return match[0].trim() + " " + match[1].trim();
  } else {
    return name;
  }
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
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
