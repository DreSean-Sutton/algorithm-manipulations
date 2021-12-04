/* exported takeRight */

/*
-assign the value of an empty string to variable newArr
-if array.length === 0
  return array;
-assign the value of array.slice(array.length - count) to newArr
-return newArr
*/
function takeRight(array, count) {
  let newArr = [];
  if (array.length === 0) {
    return array;
  }
  newArr = array.slice(array.length - count);
  return newArr;
}
