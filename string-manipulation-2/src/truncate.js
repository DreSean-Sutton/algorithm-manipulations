/* exported truncate */

function truncate(length, string) {
  let shorterString = '';
  if (string.length < length) {
    return string + '...';
  }
  for (let i = 0; i < length; i++) {
    shorterString += string[i];
  }
  return shorterString + '...';
}
