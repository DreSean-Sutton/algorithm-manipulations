/* exported capitalizeWords */

/*
-lowercase all words and assign the value to variable lowerCaseString
-uppercase the first letter and assign the value to variable firstLetter
-assign an empty string to variable capitalWords
-create a for loop that:
  a. assigns the value of 1 to i
  b. executes code block if i is less than string.length
  c. i++
-if lowerCaseString[i] === ' '
  capitalWords += ' ' + lowerCaseString[i+1].toUpperCase() into
  i++
-else
  capitalWords += lowerCaseString[i] into
-return firstLetter + capitalWords
*/

function capitalizeWords(string) {
  const lowerCaseString = string.toLowerCase();
  const firstLetter = string[0].toUpperCase();
  let capitalWords = '';
  for (let i = 1; i < string.length; i++) {
    if (lowerCaseString[i] === ' ') {
      capitalWords += ' ' + lowerCaseString[i + 1].toUpperCase();
      i++;
    } else {
      capitalWords += lowerCaseString[i];
    }
  }
  return firstLetter + capitalWords;
}
