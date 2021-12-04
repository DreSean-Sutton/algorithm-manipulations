/* exported lastChars */

/*
-assign an empty string to variable finalChars
if string is not true
  return empty string
if string.length is less than length
  return string
-assign string.slice at (string.length - length) to finalChars
-return finalChars
*/

function lastChars(length, string) {

  let finalChars = '';

  if (!string) {
    return '';
  }

  if (string.length < length) {
    return string;
  }
  finalChars = string.slice(string.length - length);
  return finalChars;
}
