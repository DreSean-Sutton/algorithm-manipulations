/* exported union */

/*
-create a variable named newArr and assign it the value of an empty array
-create a for loop that:
  a. assigns the value of 0 to i
  b. executds code block if i is less than firest.length
  c. i++
  -push the value of first[i] into newArr
-create a for loop that:
  a. assign the value of 0 to j
  b. execute th code block if j is less than second.length
  c. j++
  -push the value of second[j] into newArr
-return newArr
*/

function union(first, second) {

  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }
  for (let j = 0; j < second.length; j++) {
    if (!newArr.includes(second[j])) {
      newArr.push(second[j]);
    }
  }
  return newArr;
}
