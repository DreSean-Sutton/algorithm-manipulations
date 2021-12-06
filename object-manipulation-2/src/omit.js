/* exported omit */
/*
-assign curly braces to variable newObj
-check for variable key in source
  if the includes method at key of keys is not true
  assign the value of source at key to newObj at key
-return newObj
*/

function omit(source, keys) {
  const newObj = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
