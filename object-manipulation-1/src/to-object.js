/* exported toObject */

function toObject(keyValuePair) {
  const firstValue = keyValuePair[0];
  const secondValue = keyValuePair[1];
  const newObjValue = { [firstValue]: secondValue };
  return newObjValue;
}
