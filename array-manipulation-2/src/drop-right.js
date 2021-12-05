/* exported dropRight */

/*
-assign the value of an empty string to variable newArr
-if array.length === 0
  return array
-assign the value of array.slice(0, array.length - count) to newArr
-return newArr
*/

function dropRight(array, count) {
  let newArr = [];
  if (array.length === 0) {
    return array;
  }
  newArr = array.slice(0, array.length - count);
  return newArr;
}
