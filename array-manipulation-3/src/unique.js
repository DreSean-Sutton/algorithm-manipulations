/* exported unique */

/*
-create a variable named uniqueArr and assign it the value of an empty array
-create a for loop that:
  a. assign the value of 0 to i
  b. executes code block if i is less than array.length
  c. i++
  -if uniqueArr doesn't include array[i]
    push array[i] into uniqueArr
return uniqueArr
*/

function unique(array) {
  const uniqueArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArr.includes(array[i])) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}
