/* exported reverseWords */
/*
-create a variable called splitStr and assign it the value of string.join(' ')
-create a variable called newStr and assign it the value of an empty string
-create a for loop that:
  a. assign the value of 0 to i
  b. execute code block if i is less than splitStr
  c. i++
  -create a for loop that:
    a. assign the value of splitStr.length - 1 to j
    b. execute code block if j is greater than or equal to 0
    c. j--
      newStr += splitStr[i][j]
    if i is less than splitStr - 1
      newStr += ' '
-return newStr
*/

function reverseWords(string) {
  var splitStr = string.split(' ');
  var newStr = '';
  for (let i = 0; i < splitStr.length; i++) {
    for (let j = splitStr[i].length - 1; j >= 0; j--) {
      newStr += splitStr[i][j];
    }
    if (i < splitStr.length - 1) {
      newStr += ' ';
    }
  }
  return newStr;
}

reverseWords('What is unit testing?');
