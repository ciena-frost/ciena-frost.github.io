var npm = require('npm');
var http = require('http');
var fs = require('fs');
var request = require('sync-request');
var chalk = require('chalk');

var options = {
  'headers': {
    'user-agent': 'ciena-frost'
  }
};



var res = request('GET', 'https://api.github.com/orgs/ciena-frost/repos', options);
var body = JSON.parse(res.getBody());

body.forEach(function(repo) {
  console.log(repo.name);
  if (repo.name.startsWith("ember-")) {
    //ember install this package

    npmInstall(repo);


    //get Package JSON un comment when needed
    package_url = repo.contents_url.replace("{+path}","package.json");
    packageJSON = getPackageJSON(package_url);
    demoParentDirectory = packageJSON.frost_guide_directory;
    console.log(packageJSON);

    readme_url = repo.contents_url.replace("{+path}", "README.md");
    readme_content = getFile(readme_url);

    if (demoParentDirectory !== undefined && directoryExistsSync("/app/pods/" + demoParentDirectory)){
      demo_content_url = repo.contents_url.replace("{+path}", "/app/pods/" + demoParentDirectory);
      content = getDemoContent(demo_content_url);
      //create controller filePath

      //create template.hbs
    }else{
      console.log(chalk.red.bold("Directory: " + "/app/pods/" + demoParentDirectory + " does not exist. Skipping repo demo generation"));
    }


    // console.log(readme_content);
  }
});

function getPackageJSON(url) {
  //get api file request
  var res = request('GET', url, options);
  var body = JSON.parse(res.getBody());
  res = request('GET', body.download_url, options);
  return JSON.parse(res.getBody());
  //get download url

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
  var content;

  body.forEach(function(item){
    if (item.name == 'template.hbs'){
      content.template_hbs = getFile(item.url);
    } else if(item.name == 'route.js'){
      content.route_js = getFile(item.url);
    }
  });
  return content;
}

function npmInstall(repo) {
  console.log("Doing Ember Install of : " + repo.name);
  npm.load({
    loaded: false
  }, function(err) {
    // catch errors
    npm.commands.install([repo.name], function(er, data) {
      console.log(er);
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
