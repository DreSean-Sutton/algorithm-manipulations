/* exported intersection */

/*
-
*/

function intersection(first, second) {

  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if ((first.includes(second[j])) && (!newArr.includes(second[j]))) {
      newArr.push(second[j]);
    }
  }
  return newArr;
}
