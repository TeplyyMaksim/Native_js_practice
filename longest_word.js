/* Function returns length of the longest word */
function findLongestWord(str) {
  var words = str.split(" ");
  longest = words[0].length;
  words.map(function (word) {
    if (word.length > longest) {
      longest = word.length;
    }
  });
  return longest;
}
