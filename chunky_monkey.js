/* Function divide array on many elements with 'size' size */
function chunkArrayInGroups(arr, size) {
  var counter = 0;
  var formed = [];
  for (var i = 0; i < Math.floor(arr.length / size); i++) {
      formed.push(arr.slice(counter, counter+size));
      counter += size;
  }
  if (arr.length % size !== 0) {
    formed.push(arr.slice(counter, arr.length));
  }
  return formed;
}
