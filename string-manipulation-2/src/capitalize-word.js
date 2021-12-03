/* exported capitalizeWord */

function capitalizeWord(word) {
  const lowerCaseWord = word.toLowerCase();
  const UpperCaseLetter = word.charAt(0).toUpperCase();
  if (lowerCaseWord === 'javascript') {
    return 'JavaScript';
  }
  return UpperCaseLetter + lowerCaseWord.slice(1);
}
