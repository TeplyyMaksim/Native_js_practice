function truncateString(str, num) {
  if (num <= 3) {
    return str.substr(0, num) + "...";
  } else if (num >= str.length){
     return str;
  } else {
    var lastword = str.substr(0, num).lastIndexOf(' ');
    return str.substr(0, lastword) + "...";
  }
}
