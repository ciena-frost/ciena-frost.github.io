var npm = require('npm');
var http = require('http');
var fs = require('fs');
var request = require('sync-request');

var options = {
  'headers': {
    'user-agent': 'ciena-frost'
  }
};

var res = request('GET', 'https://api.github.com/orgs/ciena-frost/repos', options);
var body = JSON.parse(res.getBody());

body.forEach(function(repo) {
  console.log(repo.name);
  if (repo.name.startsWith("ember-")){
    //ember install this package
    console.log("Doing Ember Install of : " + repo.name);
    npm.load({
      loaded: false
          // package_url = repo.contents_url.replace("{+path}","package.json?ref=dev");
    // packageJSON = getPackageJSON(package_url);
    // console.log(packageJSON);
    }, function (err) {
      // catch errors
      npm.commands.install([repo.name], function (er, data) {
        console.log(er);
      });
      npm.on("log", function (message) {
        // log the progress of the installation
        console.log(message);
      });
    });
  }
});

function getPackageJSON(url){
  //get api file request
  var res = request('GET', url, options);
  var body = JSON.parse(res.getBody());
  res = request('GET',body.download_url,options);
  return JSON.parse(res.getBody());
  //get download url

}
// requestify.get('https://api.github.com/repos/ciena-frost/ember-frost-button/readme').then(function(response) {
//     // Get the response body
//     var body = response.getBody();
//     body.forEach(function(repo){
//       console.log(repo.name);
//       console.log("Download url: " + repo.download_url);
//       var file = fs.createWriteStream(repo.name);
//       var request = http.get(repo.download_url, function(response) {
//         response.pipe(file);
//       });
//     });
// // });
// function getOrganization(url) {
//   var content_url = "";
//   var flag = false;
//   var request = httpSync.request(url);
//   var timedout = false;
//   req.setTimeout(10, function() {
//     console.log("Request Timedout!");
//     timedout = true;
//   });
//   var response = request.end();
//
//   if (!timedout) {
//     console.log(response);
//     console.log(response.body.toString());
//   } else {
//     var body = respone.body;
//     body.forEach(function(repo) {
//       console.log(repo.name);
//       console.log("Last Push: " + repo.pushed_at);
//       if (repo.name != "ciena-frost.github.io") {
//         content_url = repo.contents_url.replace("{+path}", "");
//         flag = true;
//       }
//     });
//   }


// requestify.get(url).then(function(response) {
//     // Get the response body
//     var body = response.getBody();
//     body.forEach(function(repo){
//       console.log(repo.name);
//       console.log("Last Push: " + repo.pushed_at);
//       if (repo.name != "ciena-frost.github.io"){
//         content_url = repo.contents_url.replace("{+path}","");
//         flag = true;
//       }
//     });
// });
//
// while(flag==false)
// {}
// getRepo(content_url);


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
