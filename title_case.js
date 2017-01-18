/* Function capitalises all words in string */
function titleCase(str) {
  return str.toLowerCase().split(" ").map(function (word) { return word.length == 1 ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1); }).join(' ');
}
