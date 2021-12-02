/* exported isVowel */

function isVowel(character) {
  for (let i = 0; i < character.length; i++) {
    if (
      character[i] === 'a' ||
      character[i] === 'A' ||
      character[i] === 'e' ||
      character[i] === 'E' ||
      character[i] === 'i' ||
      character[i] === 'I' ||
      character[i] === 'o' ||
      character[i] === 'O' ||
      character[i] === 'u' ||
      character[i] === 'U'
    ) {
      return true;
    }
  }
  return false;
}
