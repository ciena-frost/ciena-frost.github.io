var http = require('http');
var fs = require('fs');
// var httpclient = require('httpclient')
// var res = get('https://api.github.com/orgs/ciena-frost/repos');
// console.log(res);

var request = require('sync-request');
var res = request('GET', 'https://api.github.com/orgs/ciena-frost/repos', {
  'headers': {
    'user-agent': 'ciena-frost'
  }
});
var body = JSON.parse(res.getBody());
body.forEach(function(repo){
      console.log(repo.name);
      console.log("Last Push: " + repo.pushed_at);
      if (repo.name != "ciena-frost.github.io"){
        content_url = repo.contents_url.replace("{+path}","");
        flag = true;
      }
    });

    
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
