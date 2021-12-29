/* exported isAnagram */

/*
-create a variable named firstNewStr and assign it the value of the regex firstString.match(/\w/).sort()
-create a variable named secondNewStr and assign it the value of the regex secondString.match(/\w/).sort()
-if firstNewString.join() is strictly equal to secondNewString.join()
  return true
-return false
*/

function isAnagram(firstString, secondString) {
  const firstNewStr = firstString.match(/\w/g).sort();
  const secondNewStr = secondString.match(/\w/g).sort();
  if (firstNewStr.join() === secondNewStr.join()) {
    return true;
  }
  return false;
}

isAnagram('debit card', 'bad credit');
