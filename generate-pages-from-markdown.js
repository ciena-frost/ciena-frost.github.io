String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

///////////////////////////MAIN////////////////////////////////
var fs = require('fs');
var child_process = require('child_process');
var chalk = require('chalk');
var path = require('path');
var mark_dir = "markdown";
var routing_string = "module.exports = [ \n";

dive(mark_dir);

routing_string += "];";

//debug console.log(routing_string);
fs.writeFileSync("config/routing.js", routing_string);
//////////////////////////////////////////////////////////////

function dive(dir) {
    var list = [];
    var stat = "";

    // Read the directory
    list = fs.readdirSync(dir);
    list.forEach(function (file) {
        if (file.charAt(2) != "-") {
            console.log("\nFile: " + file + " does not have a proper page order prefix in its name. " +
                "The page will not be generated.\n")
            return;
        }

        // Full path of that file
        var path = dir + "/" + file;

        // Get the file's stats
        stat = fs.statSync(path);

        // If the file is a directory
        if (stat && stat.isDirectory()) {
            // Dive into the directory
            //debug console.log(chalk.red.bold("Directory: " + path.replace(mark_dir + "/", "app/pods/")));

            var filename = file.replace(".md", "");

            routing_string += "{id: '" + filename.replaceAll("[0-9][0-9][-]", "") +
                "', alias: '" + toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("-", " ")) +
                "', type: 'category', route: '" +
                path.replace(mark_dir + "/", "").replaceAll("/", ".").replaceAll("[0-9][0-9][-]", "") +
                "', items: [ \n";

            dive(path);

            routing_string += "\n]}, // " + filename + "\n"
        } else {
            var filename = file.replace(".md", "");

            routing_string += "\t{id: '" + filename.replaceAll("[0-9][0-9][-]", "") + "', alias: '" +
                toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("-", " ")) +
                "', type: 'route', route: '" +
                path.replace(mark_dir + "/", "").replaceAll("/", ".").replace(".md", "").replaceAll("[0-9][0-9][-]", "") +
                "'},\n";

            var pagePath = dir.replace(mark_dir, "app/pods") + "/" + file.replace(".md", "");

            //remove the order prefixes
            pagePath = pagePath.replaceAll("[0-9][0-9][-]", "");

            //debug console.log(chalk.green.bold("Create Folder page: " + pagePath));
            //debug console.log(chalk.blue.bold("Create Index Folder: " + pagePath + "/index"));

            if (!directoryExistsSync(pagePath)) {
                mkdirpSync((pagePath).toLowerCase());
            }

            //debug console.log(chalk.blue.bold("Create route.js: " + pagePath + "/index" + "/route.js"));
            var route_js_string = "import Ember from 'ember';\nexport default Ember.Route.extend({\n\tbreadCrumb:{\n\t\ttitle:'" +
                toTitleCase(filename.replaceAll("[0-9][0-9][-]", "").replaceAll("[-]", " ")) + "'\n\t},\n\tactions: { \n \t\t goTo:function(id){$('html, body').animate({scrollTop:$(id).offset().top},2000)}}});"

            fs.writeFileSync(pagePath +"/route.js", route_js_string);

            //debug console.log(chalk.blue.bold("Create controller: " + pagePath + "/controller.js"));
            //debug console.log(chalk.blue.bold("Create template: " + pagePath + "/template.hbs"));
            var sidebar = "";
            var content = fs.readFileSync(path, 'utf8');
            if (content.indexOf("<!--Table of Contents-->") > -1){
              sidebar = '<div class="markdown-sidebar"> \n {{#frost-sidebar}}';
              content = content.substring(content.indexOf("<!--Table of Contents-->"),content.indexOf("<!---End Table of Contents-->") + "<!---End Table of Contents-->".length);
              content = content.replaceAll("<!--Table of Contents-->|<!---End Table of Contents-->|<!--|-->|","");
              
              var contents = content.split('\n');
              contents.shift();
              contents.pop();
              console.log(contents);
              contents.forEach(function(ref){
                ref = ref.replace(/\((.*)\)/, '"$1"');
                sidebar += '\n <h1 {{action "goTo" ' +ref.toLowerCase() +'}}> ' + ref.replace('#','') + '</h1>';
              });
              sidebar += '\n{{/frost-sidebar}} \n </div>\n';
            }
            
            fs.writeFileSync(pagePath + "/template.hbs", sidebar + "{{markdown-to-html class=\"guide-markdown\" " +
                "markdown=(fr-markdown-file-strip-number-prefix '" +
                path.replace(".md", "").replace(mark_dir + "/", "").replaceAll("[0-9][0-9][-]", "") +
                "')}}");
        }

    });
}


String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

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

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
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
