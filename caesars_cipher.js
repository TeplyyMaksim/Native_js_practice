/* Function deshiphrase ROT13 cipher */
function rot13(str) {
  var new_str = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) < 78) {
      new_str += String.fromCharCode(str[i].charCodeAt(0) + 13);
    } else if (str[i].charCodeAt(0) >= 78 && str[i].charCodeAt(0) < 91) {
      new_str += String.fromCharCode(str[i].charCodeAt(0) - 13);
    } else {
      new_str += str[i];
    }
  }
  return new_str;
}
