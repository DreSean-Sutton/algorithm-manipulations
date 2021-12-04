/* exported ransomCase */

/*
-assign an empty string to a variable called newstring
-lowercase the string and assign that value to a variable
-uppercase the string and assign that value to a variable
-create a for loop that:
  a. assigns the value of 0 to i
  b. code block executes if i is less than string.length
  c. i++
-if i % 2 strictly equals 0:
-newstring += lowerCaseString[i]
-else:
-newstring += upperCaseString[i]
-return the newstring
*/

function ransomCase(string) {
  let newString = '';
  const lowerCaseString = string.toLowerCase();
  const upperCaseString = string.toUpperCase();

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += lowerCaseString[i];
    } else {
      newString += upperCaseString[i];
    }
  }
  return newString;
}
