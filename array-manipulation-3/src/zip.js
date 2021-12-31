/* exported zip */

/*
-create a variable named newArr and assign it the value of an empty array
-if first.length < second.length
  create a for loop that:
  a. assigns the value of 0 t0 i
  b. executes code block if i is less than first.length
  c. i++
  -newArr.push([first[i], second[i]])
-else:
  create a for loop that:
  a. assigns the value of 0 t0 i
  b. executes code block if i is less than second.length
  c. i++
  -newArr.push([first[i], second[i]])
  return newArr
*/

function zip(first, second) {
  const newArr = [];
  if (first.length < second.length) {
    for (let i = 0; i < first.length; i++) {
      newArr.push([first[i], second[i]]);
    }
  } else {
    for (let i = 0; i < second.length; i++) {
      newArr.push([first[i], second[i]]);
    }
  }
  return newArr;
}
