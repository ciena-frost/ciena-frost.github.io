var npm = require('npm');
var http = require('http');
var fs = require('fs');
var path = require('path');
var request = require('sync-request');
var chalk = require('chalk');
var toSource = require('tosource')
var exec = require('sync-exec');
var Finder = require('fs-finder');

String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};
Set.prototype.toJSON = function toJSON() {
  return Array.from(this);
}
Array.prototype.contains = function (obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
}

var options = {
  'headers': {
    'user-agent': 'ciena-frost',
    'Authorization': 'token ' + process.env.ghToken
  }
};

var res = request('GET', 'https://api.github.com/orgs/ciena-frost/repos', options);
var body = JSON.parse(res.getBody());
var contributorMap = new Map();

//Mirage Maps   Map Key = <path> Value = <ModuleName>       In main funcition call <ModuleName>()
var scenariosToImportMap = new Map();
var configstoImportMap = new Map();

var routingConfig = require('./config/routing')

body.forEach(function (repo) {
  console.log(repo.name);
  if (stringStartsWith(repo.name, "ember-") && repo.name != "ember-frost-brackets-snippets") {

    //get Package JSON un comment when needed
    var package_url = repo.contents_url.replace("{+path}", "package.json?ref=master");
    var packageJSON = getPackageJSON(package_url);
    if (packageJSON === undefined) {
      return;
    }
    //ember install this package
//    emberInstall(repo.name);

    if (packageJSON.contributors != undefined) {
      packageJSON.contributors.forEach(function (user) {

        //get user in (https://github.com/ewhite613)
        var userIdRegex = /\/([a-z|0-9]+)\)/i
        var userId = user.match(userIdRegex)
        if (userId != undefined) {
          var userJSON = requestJSON("https://api.github.com/users/" + user.match(userIdRegex)[1])
          addDedicatedContributor(userJSON, repo.name)
        }

      })
    }

    if (typeof packageJSON.frostGuideDirectory === 'string')
      createContent(packageJSON.frostGuideDirectory, repo, packageJSON, "")
    else if (packageJSON.frostGuideDirectory != undefined) {
      for (var i = 0; i < packageJSON.frostGuideDirectory.length; i++) {
        var demo = packageJSON.frostGuideDirectory[i];
        for (var route in demo) {
          createContent(demo[route], repo, packageJSON, "/" + route)
        }
      }
    }

  }
});

//Populate Dedicated Contributors Map
var frostGuideContributors = getCienFrostRepoContributors("ciena-frost.github.io");
frostGuideContributors.forEach(function (user) {
  var userJSON = requestJSON(user.url);
  addDedicatedContributor(userJSON, "ciena-frost.github.io")
});

//Populate Dedicated Contributors Page
var template_content = "<div class='md'>\n\t";
var contributorJSON = []
contributorMap.forEach(function (value, key) {
  if (value.login === "travis-ci-ciena") {
    return;
  }
  contributorJSON.push(value);
})
fs.writeFileSync("public/data/contributors.json", JSON.stringify(contributorJSON))

//Build Mirage Maps Key = <path> Value = <ModuleName>
var defaultImportsJS = ""
var defaultBodyJS = "export default function (server) {\n"
scenariosToImportMap.forEach(function (value, key) {
  defaultImportsJS += "import " + value + " from " + "'./" + key + "'\n"
  defaultBodyJS += "\t" + value + "(server)\n"
})
defaultBodyJS += "}\n"
fs.writeFileSync("app/mirage/scenarios/default.js", defaultImportsJS + defaultBodyJS)

var configImportsJS = ""
var configBodyJS = "export default function () {\n"
configBodyJS += "\tthis.namespace = config.mirageNamespace\n"
configstoImportMap.forEach(function (value, key) {
  configImportsJS += "import " + value + " from " + "'./" + key + "'\n"
  configBodyJS += "\t" + value + ".call(this)\n"
})
configBodyJS += "}\n"
configImportsJS += "import config from '../config/environment'\n"
fs.writeFileSync("app/mirage/config.js", configImportsJS + configBodyJS)

/////////////////////////// FUNCTIONS ////////////////////////////////////
function getDemoRouting(url, routingConfig, demoParentDirectory) {
  var demoRouting_string = getFile(url)
  var demoRouting = requireFromString(demoRouting_string)
  var result = mergeRouting(routingConfig, demoRouting, demoParentDirectory)

  fs.writeFileSync("config/routing.js", "module.exports = " + toSource(result) + "\n")
}

function mergeRouting(base, demo, demoParentDirectory) {
  var demoId = demoParentDirectory.replace(/\//g, ".") //.toLowerCase()
  function mergeItems(items, parent) {
    items.forEach(function (item) {
      item.route = item.route.replace('demo.', parent.toLowerCase() + ".")
      if (item.path !== undefined && item.path.path && item.path.path !== "/") {
        item.path.path = demoParentDirectory.toLowerCase() + item.path.path
      }
      if (item.items !== undefined) {
        mergeItems(item.items, parent.toLowerCase() + "." + item.id)
      }
    })
  }
  base.forEach(function (routeConfig) {
    if (routeConfig.items === undefined) {
      if (routeConfig.route === demoId) {
        console.log(chalk.blue("Found match for: " + demoId))
        console.log(routeConfig)
        console.log(demo)
          //        routeConfig.alias = "Found You"
        if (demo[0].modalName !== undefined && demo[0].modal !== undefined) {
          routeConfig.modalName = demo[0].modalName
          routeConfig.modal = demo[0].modal
        }

        if (demo[0].path !== undefined && demo[0].path.path && demo[0].path.path !== "/") {
          routeConfig.path = demo[0].path
        }
        if (demo[0].items !== undefined) {
          console.log(chalk.blue("Found items: " + toSource(demo[0].items)))
          mergeItems(demo[0].items, demoId)
          routeConfig.items = demo[0].items
        }

        if (demo[0].modals !== undefined){
          routeConfig.modals = demo[0].modals
        }

      }
    } else {
      routeConfig.items.forEach((item) => {
        mergeRouting([item], demo, demoParentDirectory.toLowerCase())
      })
    }
  })
  return base
}

function addDedicatedContributor(user, repo) {
  if (!contributorMap.has(user.login)) {
    user.repos = new Set()
    user.repos.add(repo)
    contributorMap.set(user.login, user)

  } else {
    var currUser = contributorMap.get(user.login)
    currUser.repos.add(repo)
    contributorMap.set(user.login, currUser)
  }
}

function getDemoComponentHelpers(url, demoDirectory) {
  var res = request('GET', url, options);
  var body = JSON.parse(res.getBody());
  var BreakException = {};

  body.forEach(function (component) {
    if (component.type === "dir") {
      var content = getFolder(component.url, component.name)
      var path = "app/pods/components/" + component.name;
      var isComponent = false
      content.forEach(function (value, key) {
        if (key.indexOf("component.js") > -1) {
          mkdirpSync(path);
          isComponent = true
          var parent = key.split('/')[0]
          content.forEach(function (value, key) {
            if (key.indexOf(parent) > -1) {
              fs.writeFileSync("app/pods/components/" + key.toLowerCase(), value)
            }
          })
        }
        //        fs.writeFileSync("app/pods/components/" + key, value)
      })
      if (!isComponent && component.name !== "index") {
        path = "app/pods/" + demoDirectory + "/" + component.name
        console.log("Path: " + path.toLowerCase())
        mkdirpSync(path.toLowerCase())
          // Not a component helper. So it's a route
        content.forEach(function (value, key) {


          var writeTo = "app/pods/" + demoDirectory + "/" + key
          writeTo = writeTo.toLowerCase()
          console.log("Write to: " + writeTo)
          mkdirpSync(writeTo.match(/([a-z|-]+\/)+/i)[0].toLowerCase())
          fs.writeFileSync(writeTo, value.replace(/route="demo\.([a-z|\.|-]+)[\'|\"]/ig, "route=\"" + packageJSON.frostGuideDirectory.replace(/\//g, ".") + ".$1'"))

        })
      }
    }
  })
}

function getDemoComponents(url) {
  var res = request('GET', url, options);
  var body = JSON.parse(res.getBody());
  body.forEach(function (component) {
    if (component.type === "dir") {
      var content = getFolder(component.url, component.name)
      var path = "app/pods/components/" + component.name;
      mkdirpSync(path);
      content.forEach(function (value, key) {
        fs.writeFileSync("app/pods/components/" + key, value)
      })
    }
  })
}

function getDemoModels(url) {
  try {
    var res = request('GET', url, options);
    var body = JSON.parse(res.getBody());
    body.forEach(function (model) {
      if (model.name.endsWith('.js')) {
        var contents = getFile(model.url)
        fs.writeFileSync("app/models/" + model.name, contents)
      }
    })
  } catch (err) {
    console.log(chalk.red.bold(err))
  }
}

function getDemoMirage(url, scenariosToImportMap, configstoImportMap, repoName) {
  //  try {
  mkdirpSync("app/mirage/fixtures")
  mkdirpSync("app/mirage/factories")
  try {
    var res = request('GET', url, options);
    var body = JSON.parse(res.getBody());
  } catch (err) {
    console.log(chalk.red.bold(err))
    return;
  }
  body.forEach(function (mirage) {
      if (mirage.type === "dir") {
        var folderContent = getFolder(mirage.url, mirage.name)
          //        console.log(folderContent)
        folderContent.forEach(function (value, key) {
          if (key.indexOf("fixtures/") > -1 || key.indexOf("factories/") > -1) {
            fs.writeFileSync("app/mirage/" + key, value)
          } else if (key.indexOf("scenarios/default.js") > -1) {
            var path = "app/mirage/scenarios/" + repoName + "-default.js"
            fs.writeFileSync(path, value)
            var val = repoName.replace(/-(.)/g, function (m, $1) {
              return $1.toUpperCase()
            })
            scenariosToImportMap.set(repoName + "-default", val)
          }
        })
      } else {
        if (mirage.name === "config.js") {
          var config_Content = getFile(mirage.url)
          var path = "app/mirage/" + repoName + "-config.js"
          fs.writeFileSync(path, config_Content)
          var val = repoName.replace(/-(.)/g, function (m, $1) {
            return $1.toUpperCase()
          })
          configstoImportMap.set(repoName + "-config", val)
        }
      }

    })
    //  } catch (err) {
    //    console.log(chalk.red.bold(err))
    //  }
}

function createContent(demoParentDirectory, repo, packageJSON, demoLocation) {
  if (demoParentDirectory === undefined) {
    var componentContributors = getCienFrostRepoContributors(repo.name);
    componentContributors.forEach(function (user) {
      var userJSON = requestJSON(user.url);
      addDedicatedContributor(userJSON, repo.name)
    })
    return;
  }
  var linuxCompatibleDemoParentDirectory = demoParentDirectory.toLowerCase()
  // demoParentDirectory = "ui-components/button-controls/button";
  //console.log(packageJSON);

  readme_url = repo.contents_url.replace("{+path}", "README.md");
  readme_content = getFile(readme_url);

  if (demoParentDirectory !== undefined && directoryExistsSync("app/pods/" + demoParentDirectory)) {
    var demo_content_url = repo.contents_url.replace("{+path}", "tests/dummy/app/pods/demo" + demoLocation + "?ref=master");
    var demo_style_url = repo.contents_url.replace("{+path}", "tests/dummy/app/styles/app.scss?ref=master")
    var demo_application_content_url = repo.contents_url.replace("{+path}", "tests/dummy/app/pods/application?ref=master");
    var demo_models_url = repo.contents_url.replace("{+path}", "tests/dummy/app/models?ref=master")
    var demo_mirage_url = repo.contents_url.replace("{+path}", "tests/dummy/app/mirage?ref=master")
    getDemoModels(demo_models_url);
    getDemoMirage(demo_mirage_url, scenariosToImportMap, configstoImportMap, repo.name);
    try {
      var content = getDemoContent(demo_content_url);
    } catch (err) {
      console.log(err)
      return
    }
    var application_content = getDemoApplicationContent(demo_application_content_url);
    var style = GetDemoStyle(demo_style_url);


    if (content.template_hbs === undefined) {
      console.log(chalk.blue("Demo template empty. Checking demo/index"))
      demo_content_url = repo.contents_url.replace("{+path}", "tests/dummy/app/pods/demo/" + demoLocation + "index" + "?ref=master");
      try {
        var content = getDemoContent(demo_content_url);
      } catch (err) {
        console.log(err)
        return
      }
    }

    //create route.js
    if (!directoryExistsSync("app/pods/" + demoParentDirectory + "/util")) {
      mkdirpSync(("app/pods/" + demoParentDirectory + "/util").toLowerCase());
    }
    if (content.route_js !== undefined) {
      fs.writeFileSync("app/pods/" + linuxCompatibleDemoParentDirectory + "/util/route.js", content.route_js);
    } else {
      fs.writeFileSync("app/pods/" + linuxCompatibleDemoParentDirectory + "/util/route.js", "import Ember from 'ember'\n\nexport default Ember.Route.extend({\n\n})\n");
    }
    //import route and use
    try {
      var route_content = fs.readFileSync("app/pods/" + linuxCompatibleDemoParentDirectory + "/route.js").toString()
    } catch (e) {
      console.log(chalk.red.bold("route.js does not exist. This is probably because" +
        " the markdown file for the description tab has not been created. Create one, run" +
        " generate-pages-from-markdown.js to create route.js and then run this script again."));
      throw e;
    }
    route_content = route_content.replace("export default Ember.Route.extend", "import DemoRoute from './util/route'\nexport default DemoRoute.extend")
    fs.writeFileSync("app/pods/" + linuxCompatibleDemoParentDirectory + "/route.js", route_content)

    //controller
    if (content.controller_js !== undefined) {
      if (occurrences(content.controller_js, "Ember") === 2) {
        content.controller_js = content.controller_js.replace("import Ember from 'ember'\n", "");
      }
      fs.writeFileSync("app/pods/" + linuxCompatibleDemoParentDirectory + "/controller.js",
        "import ApiController from 'frost-guide/utils/ApiController'\n" + content.controller_js.replace("Ember.Controller.extend", "ApiController.extend").replace(/import config from '[\.\.\/]*config\/environment'/i, "import config from 'frost-guide/config/environment'").replace(/[\'|\"]demo\/([a-z|\.|-]+)[\'|\"]/ig, "'" + packageJSON.frostGuideDirectory + "/$1'")
      );
    } else {
      fs.writeFileSync("app/pods/" + linuxCompatibleDemoParentDirectory + "/controller.js",
        "import ApiController from 'frost-guide/utils/ApiController'\n\n" +
        "export default ApiController.extend({\n\n" +
        "})\n");
    }
    //create template.hbs
    //insert tabs
    //need to redo this
    var descriptionContent = "{{markdown-to-html ghCodeBlocks=true tables=true class=\"guide-markdown\" " +
      "markdown=(fr-markdown-file-strip-number-prefix '" +
      demoParentDirectory +
      "')}}";

    if (!directoryExistsSync("public/api-markdown/" + linuxCompatibleDemoParentDirectory)) {
      mkdirpSync(("public/api-markdown/" + linuxCompatibleDemoParentDirectory).toLowerCase());
    }
    fs.writeFileSync("public/api-markdown/" + linuxCompatibleDemoParentDirectory + "/README.md",
      readme_content.replace(/\s\*\s\[[a-z]+\]\(#[a-z]+\)/ig, "")
    );

    var template_content = ""
    template_content += "<div class=\"md\">"
    template_content += "{{#frost-tabs on-change=(action 'tabSelected') selection=selectedTab}}"
    template_content += "\n\t{{#frost-tab alias='Description' class='description' id='description'}}"
    template_content += "\n\t\t" + descriptionContent
    
    template_content += "\n\t\t<div id='md-scrollspy' class='md-scrollspy'>";

    // Begin geting headers from markdown file
    
    var pathRegexStr = ""
    demoParentDirectory.split('/').forEach(function (pathPart) {
      pathRegexStr += '/[0-9][0-9]-' + pathPart 
    })
    pathRegexStr += ".md"
    
    var markdownFiles = Finder.from('./markdown').find();
    var markdownFilePath = "" 
    markdownFiles.forEach(function (file) {
      if(file.match(new RegExp(pathRegexStr, 'i')) != null)
        markdownFilePath = file
    })
    
    var insideCodeSnippet = false;
    fs.readFileSync(markdownFilePath).toString().split('\n').forEach(function (line) {
      if(line.match('```') && !insideCodeSnippet)
        insideCodeSnippet = true;
      else if(line.match('```') && insideCodeSnippet)
        insideCodeSnippet = false;
      else if (line.match("^#") && !insideCodeSnippet) {
        line = line.replaceAll("#", "");
        var header = line;
        var id = "#" + line.replaceAll(" ", "").toLowerCase().replace(/\W+/g, '');
        template_content += "\n\t\t\t{{#scroll-to to=\"" + id + "\"}}" + header + "{{/scroll-to}}";
      }
    });
    
    // Done getting headers

    template_content += "\n\t\t</div>";
    
    template_content += "\n\t{{/frost-tab}}"
    template_content += "\n\t{{#frost-tab alias='API' id='api'}}"
    template_content += "\n\t\t  " + "{{markdown-to-html ghCodeBlocks=true tables=true class=\"guide-markdown\" " + "markdown=(fr-markdown-api-file '"
    template_content += demoParentDirectory + "/README')}}"
    template_content += "\n\t{{/frost-tab}}"
    template_content += "\n\t{{#frost-tab alias='Demo' id='demo'}}"
     if (typeof packageJSON.frostGuideDirectory === 'string')
      template_content += "\n\t\t<div>" + application_content.template_hbs.replace('{{outlet}}', content.template_hbs.replace(/\{\{#frost-link [\'|\"]demo\.([a-z|\.|-]+)[\'|\"]/ig, "{{#frost-link '" + packageJSON.frostGuideDirectory.replace(/\//g, ".") + ".$1'").replace(/\{\{#link-to [\'|\"]demo\.([a-z|\.|-]+)[\'|\"]/ig, "{{#link-to '" + packageJSON.frostGuideDirectory.replace(/\//g, ".") + ".$1'")) + "</div>\n"
    else if (packageJSON.frostGuideDirectory != undefined) {
      template_content += "\n\t\t<div>" + application_content.template_hbs.replace('{{outlet}}', '{{outlet}}' + content.template_hbs) + "</div>\n"
    }
    template_content += "\n\t{{/frost-tab}}"
    template_content += "\n{{/frost-tabs}}"
    template_content += "\n\t<div class='footer'>\n"
    template_content += "\t\t<div class='info'>\n\t\t\t<div>\n\t\t\t\t<div class='contributors'>\n\t\t\t\t\t<span "
    template_content += "class=\"footerHeading\">Contributors</span>";

    var contributorsCount = 0;
    var contributorDuplicates = 0;
    var componentContributors = getCienFrostRepoContributors(repo.name);
    if (packageJSON.contributors != undefined) {
      packageJSON.contributors.forEach(function (user) {
        contributorsCount++
        //get user in (https://github.com/ewhite613)
        var userIdRegex = /\/([a-z|0-9]+)\)/i
        var userId = user.match(userIdRegex)
        if (userId != undefined) {
          var userJSON = requestJSON("https://api.github.com/users/" + user.match(userIdRegex)[1])
          if (componentContributors.contains(userJSON) === false) {
            if (userJSON.login === "travis-ci-ciena") {
              return
            }
            if (contributorsCount === componentContributors.length + packageJSON.contributors.length) {
              template_content += userJSON.name !== null ? userJSON.name : userJSON.login;
            } else {
              template_content += (userJSON.name !== null ? userJSON.name : userJSON.login) + " - ";
            }
          } else {
            contributorDuplicates++
          }
        }

      })
    } else {
      packageJSON.contributors = []
    }
    componentContributors.forEach(function (user) {
      contributorsCount++;
      if (user === "") {
        return
      }
      var userJSON = requestJSON(user.url);
      if (userJSON.login === "travis-ci-ciena") {
        return
      }
      if (contributorsCount === componentContributors.length + packageJSON.contributors.length - contributorDuplicates) {
        template_content += userJSON.name !== null ? userJSON.name : userJSON.login;
      } else {
        template_content += (userJSON.name !== null ? userJSON.name : userJSON.login) + " - ";
      }
      addDedicatedContributor(userJSON, repo.name)
    });


    template_content += "\n\t\t\t</div>\n\t\t\t<div class='connect'>\n\t\t\t\t<span class=\"footerHeading\">Connect</span>";
    template_content += "\n\t\t\t\t\t <a href=\"" + repo.html_url + "\" class=\"gh-button\"><img src=\"assets/images/gh-icon.png\" width='20' height='20'><span>View on Github</span></a> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br/>\n\t\t</div>";
    template_content += "\n\t\t<div class='copyright'>\n\t\t\t\n\t\t</div>\n\t</div>";
    template_content += "\n</div>";

    fs.writeFileSync("app/pods/" + linuxCompatibleDemoParentDirectory + "/template.hbs", template_content);

    //styles.scss
    var app_sass = fs.readFileSync("app/styles/app.scss").toString();
    if (style !== undefined && app_sass.search("@import './api-" + repo.name) === -1) {
      fs.writeFileSync("app/styles/_api-" + repo.name + ".scss", style);
      var arr_app_sass = app_sass.split('\n');
      arr_app_sass.splice(9, 0, "@import './api-" + repo.name + "';");
      var final_app_sass = arr_app_sass.join('\n');
      fs.writeFileSync("app/styles/app.scss", final_app_sass);
      //        console.log(final_app_sass);
    } else if (style !== undefined) {
      fs.writeFileSync("app/styles/_api-" + repo.name + ".scss", style);
    }

  } else {
    console.log(chalk.red.bold("Directory: " + "/app/pods/" + demoParentDirectory + " does not exist. Skipping repo demo generation"));
  }

  // Get Demo Component Helpers
  try {
    var components_url = repo.contents_url.replace("{+path}", "tests/dummy/app/pods/demo?ref=master");
    getDemoComponentHelpers(components_url, packageJSON.frostGuideDirectory)
  } catch (err) {
    if (err.toString().indexOf("Error: Server responded with status code 404:") > -1) {
      console.log(chalk.red.bold("No demo component helpers to import"))
    } else {
      console.log(chalk.red.bold(err))
    }
  }
  // Get Demo Components
  try {
    var components_url = repo.contents_url.replace("{+path}", "tests/dummy/app/pods/components?ref=master");
    getDemoComponents(components_url)
  } catch (err) {
    if (err.toString().indexOf("Error: Server responded with status code 404:") > -1) {
      console.log(chalk.red.bold("No demo components to import"))
    } else {
      console.log(chalk.red.bold(err))
    }
  }
  //Get Demo routing.js
  try {
    var routing_url = repo.contents_url.replace("{+path}", "tests/dummy/config/routing.js?ref=master");
    getDemoRouting(routing_url, routingConfig, demoParentDirectory)
  } catch (err) {
    if (err.toString().indexOf("Error: Server responded with status code 404:") > -1) {
      console.log(chalk.red.bold("No routing.js to import"))
    } else {
      throw err
    }
  }
}

function getPackageJSON(url) {
  //get api file request
  try {
    var res = request('GET', url, options);
    var body = JSON.parse(res.getBody());
    res = request('GET', body.download_url, options);
    return JSON.parse(res.getBody());
    //get download url
  } catch (err) {
    return undefined;
  }
}

function getFile(url) {
  //get api file request
  var res = request('GET', url, options);
  var body = JSON.parse(res.getBody());
  var buf = new Buffer(body.content, 'base64')
  return buf.toString("ascii");

}

function getFolder(url, parent) {
  var contents = new Map()
  var res = request('GET', url, options)
  var body = JSON.parse(res.getBody())
  body.forEach(function (item) {
    if (item.type === "dir") {
      contents = new Map(function* () {
        yield * contents;
        yield * getFolder(item.url, parent + "/" + item.name);
      }())
    } else if (item.type === "file") {
      var fileContent = getFile(item.url);
      contents.set(parent + "/" + item.name, fileContent)
    }
  })
  return contents
}

function getDemoContent(url) {
  var res = request('GET', url, options);
  var body = JSON.parse(res.getBody());
  var template_hbs;
  var route_js;
  var controller_js;

  body.forEach(function (item) {
    if (item.name == 'template.hbs') {
      template_hbs = getFile(item.url);
      //      console.log(template_hbs);
      //      console.log("Template file: " + item.url );
    } else if (item.name == 'route.js') {
      route_js = getFile(item.url);
    } else if (item.name == 'controller.js') {
      controller_js = getFile(item.url);
    }
  });
  return {
    template_hbs: template_hbs,
    route_js: route_js,
    controller_js: controller_js
  };
}

function getDemoApplicationContent(url) {
  try {
    var res = request('GET', url, options);
    var body = JSON.parse(res.getBody());
    var template_hbs;
    var route_js;
    var controller_js;

    body.forEach(function (item) {
      if (item.name == 'template.hbs') {
        template_hbs = getFile(item.url);
        //      console.log(template_hbs);
        //      console.log("Template file: " + item.url );
      } else if (item.name == 'route.js') {
        route_js = getFile(item.url);
      } else if (item.name == 'controller.js') {
        controller_js = getFile(item.url);
      }
    });
    return {
      template_hbs: template_hbs,
      route_js: route_js,
      controller_js: controller_js
    };
  } catch (err) {
    return {
      template_hbs: "{{outlet}}"
    }
  }

}

function GetDemoStyle(url) {
  var res = request('GET', url, options);
  var body = JSON.parse(res.getBody());
  return new Buffer(body.content, body.encoding).toString();
}

function npmInstall(repo) {
  console.log("Doing NPM Install of : " + repo);
  npm.load({
    loaded: false
  }, function (err) {
    // catch errors
    npm.commands.install([repo], function (er, data) {
      if (er !== null)
        console.log("Npm install error: " + er);
    });
    npm.on("log", function (message) {
      // log the progress of the installation
      console.log(message);
    });
  });
}

function directoryExistsSync(filePath) {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
}

function get(url) {
  requestify.get(url).then(function (response) {
    var body = respone.getBody();
    return body;
  }, function (err) {
    console.log(err);
  });
}

function getRepo(url) {
  console.log(url);
  debugger;
  requestify.get(url).then(function (response) {
    var body = respone.getBody();
    //    console.log(respone);
    console.log("Hello");
  }, function (err) {
    console.log(err);
  });

}

function getCienFrostRepoContributors(repo) {
  try {
    var res = request('GET', 'https://api.github.com/repos/ciena-frost/' + repo + '/contributors', options);
    return JSON.parse(res.getBody());
  } catch (err) {
    return undefined;
  }
}

function requestJSON(url) {
  try {
    var res = request('GET', url, options);
    return JSON.parse(res.getBody());
  } catch (err) {
    return undefined;
  }
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

function directoryExistsSync(filePath) {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (err) {
    return false;
  }
}

function occurrences(string, subString, allowOverlapping) {

  string += "";
  subString += "";
  if (subString.length <= 0) return (string.length + 1);

  var n = 0,
    pos = 0,
    step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
}

function requireFromString(src, filename) {
  var Module = module.constructor;
  var m = new Module();
  m._compile(src, filename);
  return m.exports;
}

function emberInstall(repo) {
  if (repo === "ember-frost-notifier") {
    //until issue is resolved
    return
  }
  console.log("Doing Ember Install of : " + repo);
  var log = exec('ember install ' + repo);
  if (log.status === 0) {
    console.log(chalk.green.bold(log.stdout));
  } else {
    console.log(chalk.red.bold(log.stderr));
  }
}

function stringStartsWith(string, prefix) {
  return string.slice(0, prefix.length) == prefix;
}
