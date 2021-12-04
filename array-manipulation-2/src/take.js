/* exported take */

/*
-assign an empty array to variable new newArr
-if array.length is strictly equal to 0
  return array
-create a for loop that
  a. assigns 0 to i
  b. executes code block if i is less than count
  c. i++
-push array[i] into newArr
-return newArr
*/

function take(array, count) {
  const newArr = [];
  if (array.length === 0) {
    return array;
  } else {
    for (let i = 0; i < count; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
