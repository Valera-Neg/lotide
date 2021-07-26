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

assertArraysEqual(flatten(['Val', ['Matt', 'Tim'], 'Zev', ['Hello']]),['Val', 'Matt', 'Tim', 'Zev', 'Hello']);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([9, 7, [false, 5], 5, [8]]),[9, 7, 3, 5, 5, 8]);