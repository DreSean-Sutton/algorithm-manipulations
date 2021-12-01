/* exported capitalize */

function capitalize(word) {
  const lowerCaseWord = word.toLowerCase();
  const firstLetter = lowerCaseWord[0];
  const capitalLetter = firstLetter.toUpperCase();
  return capitalLetter + lowerCaseWord.slice(1);
}
