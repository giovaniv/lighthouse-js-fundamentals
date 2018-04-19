/*
function lowest(arr) {
  for (var i = 0; i < arr.length; i++ ) {

  }
}
*/

function merge(arr1,arr2) {
  var result = [];
  if (arr1.length > 0) {
    for (var i = 0; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  }
  if (arr2.length > 0) {
    for (var j = 0; j < arr2.length; j++) {
      result.push(arr2[j]);
    }
  }
  result.sort();
  return result;
}

/*
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
*/
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));