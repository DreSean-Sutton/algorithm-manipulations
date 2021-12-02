/* exported reverseWord */

function reverseWord(word) {
  let reversal = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversal += word[i];
  }
  return reversal;
}
