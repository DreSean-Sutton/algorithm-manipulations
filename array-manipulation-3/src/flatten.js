/* exported flatten */

/*
-
*/

function flatten(array) {
  const flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattenedArray.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    }
  }
  return flattenedArray;
}
