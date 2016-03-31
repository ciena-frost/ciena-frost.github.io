var fs = require('fs');
var path = require('path');

var args = process.argv.slice(2);
var unMark = false;
if (args.length >= 1) {
  console.log('found param')
  unMark = args[0] === 'unMark' ? true : false
}
if (unMark) {
  var unMarkedFilesAndFolders = require('./deleted.json')
  console.log('Putting back shit ')
  unMarkedFilesAndFolders.forEach(function (item) {
    if (Array.isArray(item.content)) {
      putFolderBack(item)
    } else {
      putFileBack(item)
    }
  })
  fs.unlinkSync('deleted.json');
} else {
  if (fs.accessSync('deleted.json') !== fs.F_OK){
    console.log('Already existing deleted.json . Did you forget to run `node external-publish unMark`?')
    return
  }
  // images
  var markedForDeletion = []
  var images = walkSync('public/assets/images', '', markedForDeletion)
  var markdown = walkSync('markdown', '', markedForDeletion)
  for (var i = 0; i < markedForDeletion.length; i++) {
    var value = markedForDeletion[i]
    if (value.content === 'folder') {
      value.content = getDirContents(value.name)
      rmDir(value.name, true)
    } else {
      //file
      fs.unlinkSync(value.name);
    }
  }


  fs.writeFileSync('deleted.json', JSON.stringify(markedForDeletion))
}

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}


function putFileBack(file) {
  base64_decode(file.content, file.name)
}

function putFolderBack(folder) {
  if (!fs.existsSync(folder.name)) {
    fs.mkdirSync(folder.name);
  }
  folder.content.forEach(function (item) {
    if (Array.isArray(item.content)) {
      putFolderBack(item)
    } else {
      putFileBack(item)
    }
  })
}


/*
 * Get directory folder and files
 */
function walkSync(dir, parent, markForDeletion) {
  parent = typeof parent !== 'undefined' ? parent : '';
  var fs = fs || require('fs');
  var files = fs.readdirSync(dir);
  var filelist = [];
  files.forEach(function (file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      if (file.indexOf('private') > -1) {
        //mark for deletion
        markForDeletion.push({
          name: dir + '/' + file,
          content: 'folder'
        })
      } else {
        filelist.push({
          folder: parent + file,
          items: walkSync(dir + '/' + file, parent + file + '/', markForDeletion)
        })
      }
    } else {
      if (file.indexOf('private') > -1) {
        markForDeletion.push({
          name: dir + '/' + file,
          content: base64_encode(dir + '/' + file)
        })
      }
      filelist.push(parent + file);
    }
  });
  return filelist;
};

function getDirContents(currentDirPath, parent) {
  parent = typeof parent !== 'undefined' ? parent : '';
  var fs = fs || require('fs');
  var files = fs.readdirSync(currentDirPath);
  var filelist = [];
  files.forEach(function (file) {
    if (fs.statSync(currentDirPath + '/' + file).isDirectory()) {
      filelist.push({
        folder: parent + file,
        items: getDirContents(currentDirPath + '/' + file, parent + file + '/')
      })
    } else {
      filelist.push({
        name: currentDirPath + '/' + file,
        content: base64_encode(currentDirPath + '/' + file)
      });
    }
  });
  return filelist;
}

function rmDir(dirPath, removeSelf) {
  if (removeSelf === undefined)
    removeSelf = true;
  try {
    var files = fs.readdirSync(dirPath);
  } catch (e) {
    return;
  }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (filePath !== 'clones/.gitkeep') {
        if (fs.statSync(filePath).isFile())
          fs.unlinkSync(filePath);
        else
          rmDir(filePath);
      }
    }
  if (removeSelf)
    fs.rmdirSync(dirPath);
};

