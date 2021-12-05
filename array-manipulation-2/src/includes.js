/* exported includes */
/*
-create a for loop that
  a. assign the value of 0 to i
  b. code block is executed if i is less than array.length
  c. i++
-if array[i] = value
  return true
return false
*/
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
