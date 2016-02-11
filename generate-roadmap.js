var npm = require('npm');
var http = require('http');
var fs = require('fs');
var path = require('path');
var request = require('sync-request');

//Find the path to the roadmap without knowing the prefixes
pathToRoadmap = "markdown";
findOverview = fs.readdirSync(pathToRoadmap);
findOverview.forEach(function (fileOrFolder1) {
  if(fileOrFolder1.search('overview') != -1){
    pathToRoadmap += "/" + fileOrFolder1;
    findRoadmap = fs.readdirSync(pathToRoadmap);
    findRoadmap.forEach(function (fileOrFolder2){
      if(fileOrFolder2.search('roadmap') != -1){
        pathToRoadmap += '/' + fileOrFolder2;
      }
    });
  }
});

var lastUpdatePackageJSON = JSON.parse(fs.readFileSync("./package.json")).roadmapLastUpdate;
var lastUpdateRoadmapMd = fs.readFileSync(pathToRoadmap).toString().match(/\d{4}[-]\d{2}[-]\d{2}/)[0];

if(lastUpdatePackageJSON === lastUpdateRoadmapMd){
  console.log("The roadmapLastUpdate attribute in package.json has not changed, the roadmap will not be updated, exiting...");
  return;
}

//Set Up Header for call to ASANA
var options = {
  'headers': {
    'Authorization': 'Bearer ' + process.env.asanaToken
  }
};

//Call to ASANA
var res = request('GET', 'https://app.asana.com/api/1.0/projects/83000150826277/tasks', options);
var body = JSON.parse(res.getBody());
var roadmapMd = "Last update: " + lastUpdatePackageJSON;

//Create markdown content from response
body.data.forEach(function(task) {
  if(task.name.startsWith("----")){
    roadmapMd += "\n" + task.name + "\n";
    var titleLength = task.name.length;
    for(var i=0; i<titleLength; i++)
      roadmapMd += "-";
  }
  else if(task.name.slice(-1) === ":")
    roadmapMd += "\n###" + task.name;

  else
    roadmapMd += "\n- " + task.name;
});

//Overwrite roadmap with new content
fs.writeFileSync(pathToRoadmap, roadmapMd);



