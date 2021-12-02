/* exported getWords */

function getWords(string) {
  if (string === '') {
    return [];
  }
  let splitWords = '';
  splitWords = string.split(' ');
  return splitWords;
}
