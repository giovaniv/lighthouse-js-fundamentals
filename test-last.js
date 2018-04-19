function lastIndexOf(arr,vl) {
  var len = arr.length;
  var result;
  if (len === 0 || len === undefined) {
    return -1;
  } else {
    for ( var i = 0; i < len; i++ ) {
      if ( arr[i] === vl ) {
        result = i;
      }
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);