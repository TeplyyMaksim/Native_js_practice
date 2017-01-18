/* Function removes from array values that was in arguments */
function destroyer(arr) {
  var args = Array.from(arguments);
  return arguments[0].filter(function (value) {
    return (args.slice(1, args.length + 1).indexOf(value) === -1);
  });
}
