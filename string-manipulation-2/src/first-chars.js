/* exported firstChars */

/*
-assign an empty string to variable primaryChars
if string is not true
  return empty string
if string.length is less than length
  return string
-create a for loop that
  a. assigns 0 to i
  b. executes if i is less than length
  c. i++
-assign string.slice(0, length) to primaryChars
-return primaryChars
*/

function firstChars(length, string) {
  let primaryChars = '';

  if (!string) {
    return '';
  }

  if (string.length < length) {
    return string;
  }

  primaryChars = string.slice(0, length);
  return primaryChars;
}
