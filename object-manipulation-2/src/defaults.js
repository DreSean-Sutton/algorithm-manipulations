/* eslint-disable no-prototype-builtins */
/* exported defaults */

/*
-checks for variable key in source
  if target hasOwnProperty key isn't true
  target at key = source at key
*/

function defaults(target, source) {
  for (const key in source) {
    if (!target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}
