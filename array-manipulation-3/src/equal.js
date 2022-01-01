/* exported equal */

/*
-create a for loop that:
  a. assign the value of 0 to i
  b. execute code block if i is less than second.length
  c. i++
  -if first is not strictly equal to second
    return false
-return true
*/

function equal(first, second) {
  for (let i = 0; i < second.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
