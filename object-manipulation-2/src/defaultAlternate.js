/* eslint-disable no-unused-vars */

function defaults(target, source) {
  for (const key in source) {
    if (!(target in key)) {
      target[key] = source[key];
    }
  }
}
