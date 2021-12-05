/* exported drop */

/*
-assign [] to newArr
-if array.length === 0
  return array
-array.slice(count) and assign it to newArr
return newArr
*/
function drop(array, count) {
  let newArr = [];
  if (Array.length === 0) {
    return array;
  }
  newArr = array.slice(count);
  return newArr;
}
