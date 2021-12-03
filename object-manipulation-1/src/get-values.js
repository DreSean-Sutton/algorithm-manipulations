/* exported getValues */

function getValues(object) {
  const allValues = [];
  for (const value in object) {
    allValues.push(object[value]);
  }
  return allValues;
}
