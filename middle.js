const eqArrays = (arrX, arrY) =>
 arrX.length === arrY.length &&
 arrX.every((x, y) => x === arrY[y]);

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
     console.log(`✅ Assertion Passed: Array 1 === Array 2 👍`);
  } else if(eqArrays(arr1, arr2) === false) {
    console.log(`⛔ Assertion Failed: Array 1  ❗== Array 2 ❌`)
  }
};

let middle = arr => {
  let newArr = [];
  if(arr.length < 3) {
    return newArr;
  } else if(arr.length % 2 === 0) {
      newArr = arr.slice((arr.length / 2) - 1, (arr.length / 2) + 1 );
      return newArr;
    } else if(arr.length % 2 !== 0) {
        newArr = arr.slice((arr.length / 2) - 0.5, (arr.length / 2) + 0.5);  
        return newArr;  
      }
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, ]), [5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, ]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 3, 6, 7, 8, 9, ]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 4]);
assertArraysEqual(middle(['ant', 'bison', 'camel', 'duck', 'elephant']),  ["camel"]);
assertArraysEqual(middle(["bison", "camel", "duck", "elephant"]),  ["camel", "duck"]);





