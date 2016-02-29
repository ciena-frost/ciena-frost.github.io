var npm = require('npm');
var http = require('http');
var fs = require('fs');
var path = require('path');
var request = require('sync-request');
var chalk = require('chalk');

var exec = require('sync-exec');
String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

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
    emberInstall(repo.name);

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

    var demoParentDirectory = packageJSON.frostGuideDirectory;
    if (demoParentDirectory === undefined) {
      var componentContributors = getCienFrostRepoContributors(repo.name);
      componentContributors.forEach(function (user) {
        var userJSON = requestJSON(user.url);
        addDedicatedContributor(userJSON, repo.name)
      })
      return;
    }

    // demoParentDirectory = "ui-components/button-controls/button";
    //console.log(packageJSON);

    readme_url = repo.contents_url.replace("{+path}", "README.md");
    readme_content = getFile(readme_url);

    if (demoParentDirectory !== undefined && directoryExistsSync("app/pods/" + demoParentDirectory)) {
      demo_content_url = repo.contents_url.replace("{+path}", "tests/dummy/app/pods/demo?ref=master");
      demo_style_url = repo.contents_url.replace("{+path}", "tests/dummy/app/styles/app.scss?ref=master")
      var content = getDemoContent(demo_content_url);
      var style = GetDemoStyle(demo_style_url);
      //create route.js
      if (!directoryExistsSync("app/pods/" + demoParentDirectory + "/index")) {
        mkdirpSync(("app/pods/" + demoParentDirectory + "/index").toLowerCase());
      }
      fs.writeFileSync("app/pods/" + demoParentDirectory + "/index/route.js",
        content.route_js
      );

      //controller
      if (content.controller_js !== undefined) {
        if (occurrences(content.controller_js, "Ember") === 2) {
          content.controller_js = content.controller_js.replace("import Ember from 'ember'\n", "");
        }
        fs.writeFileSync("app/pods/" + demoParentDirectory + "/controller.js",
          "import ApiController from 'frost-guide/utils/ApiController'\n" + content.controller_js.replace("Ember.Controller.extend", "ApiController.extend")
        );
      }
      //create template.hbs
      //insert tabs
      //need to redo this
      var descriptionContent = "{{markdown-to-html ghCodeBlocks=true tables=true class=\"guide-markdown\" " +
        "markdown=(fr-markdown-file-strip-number-prefix '" +
        demoParentDirectory +
        "')}}";

      if (!directoryExistsSync("public/api-markdown/" + demoParentDirectory)) {
        mkdirpSync(("public/api-markdown/" + demoParentDirectory).toLowerCase());
      }
      fs.writeFileSync("public/api-markdown/" + demoParentDirectory + "/README.md",
        readme_content
      );

      var template_content = ""
      template_content += "<div class=\"md\">"
      template_content += "{{#frost-tabs on-change=(action 'tabSelected') selection=selectedTab}}"
      template_content += "\n\t{{#frost-tab alias='Description' class='description' id='description'}}"
      template_content += "\n\t\t" + descriptionContent
      template_content += "\n\t{{/frost-tab}}"
      template_content += "\n\t{{#frost-tab alias='API' class='api' id='api'}}"
      template_content += "\n\t\t  " + "{{markdown-to-html ghCodeBlocks=true tables=true class=\"guide-markdown\" " + "markdown=(fr-markdown-api-file '"
      template_content += demoParentDirectory + "/README')}}"
      template_content += "\n\t{{/frost-tab}}"
      template_content += "\n\t{{#frost-tab alias='Demo' class='demo' id='demo'}}"
      template_content += "\n\t\t<div>" + content.template_hbs + "</div>\n"
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
      template_content += "\n\t\t\t\t\t Github Button here \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br/>\n\t\t</div>";
      template_content += "\n\t\t<div class='copyright'>\n\t\t\t\n\t\t</div>\n\t</div>";
      template_content += "\n</div>";

      fs.writeFileSync("app/pods/" + demoParentDirectory + "/template.hbs", template_content);

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


    // console.log(readme_content);
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

contributorMap.forEach(function (value, key) {
  if (value.login === "travis-ci-ciena") {
    return;
  }
  template_content += "\n\t\t<div class='card'>"
  template_content += "\n\t\t\t<div class='avatar'>"
  template_content += "\n\t\t\t\t<a href='" + value.html_url + "'>"
  template_content += "\n\t\t\t\t\t<img src='" + value.avatar_url + "' height='75' width='75'>"
  template_content += "\n\t\t\t\t</a>"
  template_content += "\n\t\t\t</div>"
  template_content += "\n\t\t\t<div class='card-block'>"
  template_content += "\n\t\t\t\t<span class='card-row card-name'>" + (value.name !== null ? value.name : value.login) + "</span>"
  template_content += "\n\t\t\t\t<span class='card-row card-handle divider'>" + value.login + "</span>"
  var counter = 0
  Array.from(value.repos.values()).forEach(function (item) {
    counter++
    if (counter === 3) {
      template_content += "{{#show-more}}"
    }
    if (counter === Array.from(value.repos.values()).length) {
      template_content += "\n\t\t\t\t<span class='card-row card-repo'>" + item + "</span>"
    } else {
      template_content += "\n\t\t\t\t<span class='card-row card-repo'>" + item + ", </span>"
    }

  })
  if (counter >= 3) {
    template_content += "{{/show-more}}"
  }
  template_content += "\n\t\t\t</div>"
  template_content += "\n\t\t</div>"
})

template_content += "\n\t\t<div class='footer'> \
                    \n\t\t\t<div class='info'> \
                    \n\t\t\t\t<div> \
                    \n\t\t\t\t\t<div class='contributors'> \
                    \n\t\t\t\t\t\t<span class='footerHeading'>Contributors</span>Justin Lafleur - Eric White\
                    \n\t\t\t\t\t</div> \
                    \n\t\t\t\t\t<div class='connect'> \
                    \n\t\t\t\t\t\t<span class='footerHeading'>Connect</span> \
                    \n\t\t\t\t\t\tGithub Button here \
                    \n\t\t\t\t\t</div> \
                    \n\t\t\t\t</div> \
                    \n\t\t\t\t<br/> \
                    \n\t\t\t</div> \
                    \n\t\t\t<div class='copyright'></div> \
                    \n\t</div> \
                    \n</div>"

fs.writeFileSync("app/pods/contributing/contributors/template.hbs", template_content);


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
