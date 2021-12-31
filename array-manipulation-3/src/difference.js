/* exported difference */

/*
-create a variable named newArr and assign it the value of a empty array
-create a for loop that:
  a. assigns the value of 0 to i
  b. executes code block if i is less than first.length
  c. i++
  -if second doesn't include the value of first[i]
    newArr.push(first[i])
-create a for loop that:
  a. assigns the value of 0 to j
  b. executes code block if j is less than second.length
  c. j++
  -if first doesn't include the value of second[j]
  newArr.push(second[j])
-return newArr
*/

function difference(first, second) {
  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newArr.push(second[j]);
    }
  }
  return newArr;
}
