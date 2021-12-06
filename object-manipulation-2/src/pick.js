/* exported pick */

/*
-Assign an empty curly brace to variable newObj
-create a for key in source loop
  if keys includes keys and source at key isn't undefined
  newObj at key equals source at key
-return newObj
*/

function pick(source, keys) {
  // debugger;
  const newObj = {};
  for (const key in source) {
    if (keys.includes(key) &&
      source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}

// console.log(pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));
