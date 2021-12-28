/* exported isPalindromic */
/*
-create a variable named result and assign it the value of an empty string
-create a variable named resultReverse and assign it the value of an empty string
-create a variable named myRegex and assign it the value of the regex /[a-z0-9]gi
-result = string.match(myRegex)
-reverseResult = result.slice(0).reverse()
-if result.join('') is strictly equal to reverseResult.join('')
  return true
-else:
  return false
*/

function isPalindromic(string) {
  let result = '';
  let reverseResult = '';
  const myRegex = /[a-z0-9]/gi;
  result = string.match(myRegex);
  reverseResult = result.slice(0).reverse();
  if (result.join('') === reverseResult.join('')) {
    return true;
  } else {
    return false;
  }
}
