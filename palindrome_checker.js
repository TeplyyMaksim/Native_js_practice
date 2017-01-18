/* Return true if inputed string is palindrome */
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace( /[^a-z0-9]/g, '');
  var part1 = '';
  var part2 = '';
  if (str.length % 2 === 0) {
    for (var i = 0; i < str.length; i++) {
      if (i <= (str.length - 1) / 2) {
        part1 += str[i];
      } else {
        part2 += str[i];
      }
    }
  } else {
    var partLength = Math.floor(str.length / 2);
    for (var i = 0; i < str.length; i++) {
      if (i < partLength) {
        part1 += str[i];
      } else if (i > partLength) {
        part2 += str[i];
      }
    }
  }
  part2 = part2.split('').reverse().join('');
  return part1 == part2 ? true : false;
}
