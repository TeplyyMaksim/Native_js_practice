/* Function return true if all elements from arr[1] are in arr[0] */
function mutation(arr) {
  for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1)
      return false;
  }
  return true;
}
