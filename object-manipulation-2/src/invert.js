/* exported invert */

/*
-assign the value of curly brace to variable newObj
-look for key in source
  assign the value of source at key to value
  assign the value of key to newObj at value
-return newObj
*/

function invert(source) {
  var newObj = {};
  let value = {};
  for (var key in source) {
    value = source[key];
    newObj[value] = key;
  }
  return newObj;
}
