/* Function takes two-dimentional array and return
one-dimentional array with max value from every dimention ;)*/
function largestOfFour(arr) {
  return arr.map(function (elem) {
    var max = elem[0];
    for (var j = 1; j < elem.length; j++) {
      if (elem[j] > max) {
        max = elem[j];
      }
    }
    return max;
  });
}
