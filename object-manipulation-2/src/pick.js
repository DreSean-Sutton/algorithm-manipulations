/* exported pick */
/*
-Assign an empty curly brace to variable newObj
-create a for variable key in source loop
  if key is strictly equal to keys
  push key into newObj
return newObj
*/
function pick(source, keys) {
  // debugger;
  var newObj = {};
  for (const key in source) {
    if (keys.includes(key)) {
      newObj = key;
    }
  }
  return newObj;
}

// console.log(pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));
