/* exported numVowels */
/*
-assign zero to variable vowels
-create a for loop that
  a. assigns 0 to i
  b. executes if i is less than string.length
  c. i++
-if string[i] is strictly equal to any uppercase or lowercase vowels
  vowels++
-return vowels
*/
// potentially use a variable to count for
// vowels and increment it each time

function numVowels(string) {
  let vowels = '';
  if (!string) {
    return 0;
  }

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === 'a' ||
      string[i] === 'A' ||
      string[i] === 'e' ||
      string[i] === 'E' ||
      string[i] === 'i' ||
      string[i] === 'I' ||
      string[i] === 'o' ||
      string[i] === 'O' ||
      string[i] === 'u' ||
      string[i] === 'U'
    ) {
      vowels++;
    }
  }
  return vowels;
}
