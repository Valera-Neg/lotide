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


let a = ['Val', 3, "Peter", false, "false", "3"];
let b = ['Val', 1, "Peter", false, "false", "3"];
assertArraysEqual(a,b);