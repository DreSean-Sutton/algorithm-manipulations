/* exported getKeys */

function getKeys(object) {
  var allProps = [];
  for (const props in object) {
    allProps.push(props);
  }
  return allProps;
}
