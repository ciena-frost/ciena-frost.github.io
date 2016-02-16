var npm = require('npm');
var http = require('http');
var fs = require('fs');
var path = require('path');
var request = require('sync-request');
var chalk = require('chalk');
var marked = require('marked');
var exec = require('sync-exec');
var hljs = require('highlight').Highlight;
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code) {
      return hljs(code).value;
    }
});
var options = {
  'headers': {
    'user-agent': 'ciena-frost',
    'Authorization': 'token ' + process.env.ghToken
  }
};



var res = request('GET', 'https://api.github.com/orgs/ciena-frost/repos', options);
var body = JSON.parse(res.getBody());


body.forEach(function(repo) {
  console.log(repo.name);
  if (stringStartsWith(repo.name,"ember-")) {
    //ember install this package

    emberInstall(repo.name);


    //get Package JSON un comment when needed
    package_url = repo.contents_url.replace("{+path}","package.json?ref=master");
    packageJSON = getPackageJSON(package_url);
    if (packageJSON === undefined){
      return;
    }
    demoParentDirectory = packageJSON.frostGuideDirectory;
    if (demoParentDirectory === undefined){
      return;
    }
    // demoParentDirectory = "ui-components/button-controls/button";
    //console.log(packageJSON);

    readme_url = repo.contents_url.replace("{+path}", "README.md");
    readme_content = getFile(readme_url);

    if (demoParentDirectory !== undefined && directoryExistsSync("app/pods/" + demoParentDirectory)){
      demo_content_url = repo.contents_url.replace("{+path}", "tests/dummy/app/pods/demo?ref=master");
      demo_style_url = repo.contents_url.replace("{+path}", "tests/dummy/app/styles/app.scss?ref=master")
      var content = getDemoContent(demo_content_url);
      var style = GetDemoStyle(demo_style_url);
      //create route.js
      if (!directoryExistsSync("app/pods/" + demoParentDirectory  + "/index")) {
          mkdirpSync(("app/pods/" + demoParentDirectory  + "/index").toLowerCase());
      }
      fs.writeFileSync("app/pods/" + demoParentDirectory + "/index/route.js",
        content.route_js
      );

      //controller
      if (content.controller_js !== undefined) {
        if (occurrences(content.controller_js,"Ember") === 2){
          content.controller_js = content.controller_js.replace("import Ember from 'ember'\n","");
        }
        fs.writeFileSync("app/pods/" + demoParentDirectory + "/controller.js",
          "import ApiController from 'frost-guide/utils/ApiController'\n" + content.controller_js.replace("Ember.Controller.extend", "ApiController.extend")
        );
      }
      //create template.hbs
            //insert tabs
      //need to redo this
      var descriptionContent = "{{markdown-to-html class=\"guide-markdown\" " +
          "markdown=(fr-markdown-file-strip-number-prefix '" +
          demoParentDirectory +
          "')}}";

      if (!directoryExistsSync("public/api-markdown/" + demoParentDirectory)) {
          mkdirpSync(("public/api-markdown/" + demoParentDirectory).toLowerCase());
      }
      fs.writeFileSync("public/api-markdown/" + demoParentDirectory + "/README.md",
        readme_content
      );

      fs.writeFileSync("app/pods/" + demoParentDirectory + "/template.hbs",
        "{{#frost-tabs on-change=(action 'tabSelected') selection=selectedTab}}" +
        "\n\t{{#frost-tab alias='Description' class='description' id='description'}}" +
        "\n\t\t" + descriptionContent +
        "\n\t{{/frost-tab}}" +
        "\n\t{{#frost-tab alias='API' class='api' id='api'}}" +
        "\n\t\t  "+ "{{markdown-to-html ghCodeBlocks=true tables=true class=\"guide-markdown\" " + "markdown=(fr-markdown-api-file '" +
          demoParentDirectory + "/README')}}" +
        "\n\t{{/frost-tab}}" +
        "\n\t{{#frost-tab alias='Demo' class='demo' id='demo'}}" +
        "\n\t\t" + content.template_hbs +"\n" +
        "\n\t{{/frost-tab}}" +
        "\n{{/frost-tabs}}"
      );

      //styles.scss
      var app_sass = fs.readFileSync("app/styles/app.scss").toString();
      if (style !== undefined && app_sass.search("@import './api-" + repo.name) === -1){
        fs.writeFileSync("app/styles/_api-" + repo.name + ".scss", style);
        var arr_app_sass = app_sass.split('\n');
        arr_app_sass.splice(9,0,"@import './api-" + repo.name + "';");
        var final_app_sass = arr_app_sass.join('\n');
        fs.writeFileSync("app/styles/app.scss", final_app_sass);
        console.log(final_app_sass);
      }

    }else{
      console.log(chalk.red.bold("Directory: " + "/app/pods/" + demoParentDirectory + " does not exist. Skipping repo demo generation"));
    }


    // console.log(readme_content);
  }
});

function getPackageJSON(url) {
  //get api file request
  try{
  var res = request('GET', url, options);
  var body = JSON.parse(res.getBody());
  res = request('GET', body.download_url, options);
  return JSON.parse(res.getBody());
  //get download url
  }catch(err){
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
function getDemoContent(url){
  var res = request('GET', url, options);
  var body = JSON.parse(res.getBody());
  var template_hbs;
  var route_js;
  var controller_js;

  body.forEach(function(item){
    if (item.name == 'template.hbs'){
      template_hbs = getFile(item.url);
      console.log(template_hbs);
      console.log("Template file: " + item.url );
    } else if(item.name == 'route.js'){
      route_js = getFile(item.url);
    } else if(item.name == 'controller.js'){
      controller_js = getFile(item.url);
    }
  });
  return {
    template_hbs: template_hbs,
    route_js: route_js,
    controller_js: controller_js
  };
}

function GetDemoStyle(url){
  var res = request('GET', url, options);
  var body = JSON.parse(res.getBody());
  return new Buffer(body.content, body.encoding).toString();
}

function npmInstall(repo) {
  console.log("Doing NPM Install of : " + repo);
  npm.load({
    loaded: false
  }, function(err) {
    // catch errors
    npm.commands.install([repo], function(er, data) {
      if(er !== null)
        console.log("Npm install error: " + er);
    });
    npm.on("log", function(message) {
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
  requestify.get(url).then(function(response) {
    var body = respone.getBody();
    return body;
  }, function(err) {
    console.log(err);
  });
}

function getRepo(url) {
  console.log(url);
  debugger;
  requestify.get(url).then(function(response) {
    var body = respone.getBody();
    console.log(respone);
    console.log("Hello");
  }, function(err) {
    console.log(err);
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
function emberInstall(repo){
  console.log("Doing Ember Install of : " + repo);
  var log = exec('ember install ' + repo);
  if (log.status === 0){
    console.log(chalk.green.bold(log.stdout));
  }else{
    console.log(chalk.red.bold(log.stderr));
  }

}
function stringStartsWith (string, prefix) {
    return string.slice(0, prefix.length) == prefix;
}


