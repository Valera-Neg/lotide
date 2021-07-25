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

const eqArrays = (arrX, arrY) => arrX.length === arrY.length
 && arrX.every((x, y) => x === arrY[y]);


let flatten = arry => arry.flat();

//console.log(flatten([1, [4, 3, 2,], 2, [3, 4], 5, [6]]));