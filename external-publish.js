var fs = require('fs');
var path = require('path');

var images = walkSync('public/assets/images')
console.log(images)


/*
 * Get directory folder and files
 */
function walkSync(dir, parent) {
  parent = typeof parent !== 'undefined' ? parent : '';
  var fs = fs || require('fs');
  var files = fs.readdirSync(dir);
  var filelist = [];
  files.forEach(function (file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist.push({
        folder: parent + file,
        items: walkSync(dir + '/' + file, parent + file + '/')
      });
    } else {
      filelist.push(parent + file);
    }
  });
  return filelist;
};
