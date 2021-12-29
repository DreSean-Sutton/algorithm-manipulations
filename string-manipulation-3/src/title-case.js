/* exported titleCase */

function titleCase(string) {
  var newString = '';
  var lowerCaseString = string.toLowerCase();
  var splitString = lowerCaseString.split(' ');
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].includes('-')) {
      for (let j = 0; j < splitString[i].length; j++) {
        if (j === splitString[i].length - 1) {
          newString += splitString[i][j] + ' ';
        } else if (j === 0) {
          newString += splitString[i][j].toUpperCase();
        } else if (splitString[i][j] !== '-') {
          newString += splitString[i][j];
        } else {
          newString += '-' + splitString[i][j + 1].toUpperCase();
          j++;
        }
      }
    } else if ((string.includes(':') && splitString[i] === 'the')) {
      newString += 'The ';
    } else if ((string.includes(':') && splitString[i] === 'an')) {
      newString += 'An ';
    } else if (splitString[i].match(/web/gi)) {
      newString += 'Web ';
    } else if (splitString[i].match(/api/gi)) {
      newString += 'API ';
    } else if ((splitString[i].length < 4) &&
      (i !== 0)) {
      newString += splitString[i] + ' ';
    } else if (splitString[i] === 'javascript:') {
      newString += 'JavaScript: ';
    } else if (splitString[i] === 'javascript') {
      newString += 'JavaScript ';
    } else {
      newString += splitString[i].slice(0, 1).toUpperCase() + splitString[i].slice(1) + ' ';
    }
  }
  return newString.slice(0, newString.length - 1);
}

titleCase('The Self-taught Programmer: The Definitive Guide');
