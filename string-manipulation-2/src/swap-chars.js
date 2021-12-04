/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  let splitStr = '';
  const first = string[firstIndex];
  const second = string[secondIndex];
  splitStr = string.split('');
  splitStr.splice(secondIndex, 1, first);
  splitStr.splice(firstIndex, 1, second);
  return splitStr.join('');
}
