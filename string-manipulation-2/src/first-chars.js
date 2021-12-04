/* exported firstChars */

/*
-assign an empty string to variable primaryChars
-create a for loop that
  a. assigns 0 to i
  b. executes if i is less than length
  c. i++
-primaryChars += string[i]
return primaryChars
*/

function firstChars(length, string) {
  let primaryChars = '';

  if (!string) {
    return '';
  }

  if (string.length < length) {
    return string;
  }
  for (let i = 0; i < length; i++) {
    primaryChars += string[i];
  }
  return primaryChars;
}
