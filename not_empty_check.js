/* Function filters array and deletes all empty values */
function bouncer(arr) {
  return arr.filter(function (elem) { return elem !== false && elem && elem !== 0 && elem !== "" && elem !== undefined && !elem.isNaN;});
}
