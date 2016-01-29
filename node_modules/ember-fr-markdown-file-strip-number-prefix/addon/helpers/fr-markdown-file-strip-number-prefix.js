import Ember from 'ember';
import markdownFiles from 'ember-fr-markdown-file-strip-number-prefix/markdownFiles';

function renameProperty(obj, oldName, newName) {
     // Do nothing if the names are the same
     if (oldName === newName) {
         return obj;
     }
    // Check for the old property name to avoid a ReferenceError in strict mode.
    if (obj.hasOwnProperty(oldName)) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
    }
    return obj;
};

function clone(obj) {
    if (null === obj || "object" !== typeof obj){
      return obj;
    }
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function dive(obj){
  var i = 0;
  var arr = Object.getOwnPropertyNames(obj);
  var newObject = clone(obj);
  for (var key in obj){
    // skip loop if the property is from prototype
    if (!obj.hasOwnProperty(key)) continue;
    var prop = obj[key];

    if (typeof prop === 'object'){
      // console.log(prop + " is an object");
      var newProp = dive(clone(prop));
      newObject[key] = newProp;
    }
    renameProperty(newObject, arr[i], arr[i].toString().substring(3))
    i++;
  }
  return newObject;
}
export function frMarkdownFile([path]) {
  console.log(markdownFiles);
  var strippedMarkdownFiles = dive(clone(markdownFiles));
  console.log(strippedMarkdownFiles);
  let markdown = Ember.get(strippedMarkdownFiles, path.replace(/\//g, '.'));
  return markdown;
}
export default Ember.Helper.helper(frMarkdownFile);
