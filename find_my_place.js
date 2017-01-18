/* Function return place of external number in sorted array */
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var sortedArr = arr.sort(function (prev, next) {
    return prev - next;
  });
  if (num <= sortedArr[0]){
    return 0;
  } else if (num > sortedArr[sortedArr.length-1]) {
    return sortedArr.length;
  } else {
    for (var i = 1; i < sortedArr.length; i++){
      if (num <= sortedArr[i] && num > sortedArr[i-1]) {
        return i;
      }
    }
  }
}
