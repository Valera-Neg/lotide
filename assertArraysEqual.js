const eqArrays = (arrX, arrY) =>
 arrX.length === arrY.length &&
 arrX.every((elem, i) => elem == arrY[i]);

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} 👍`);
  } else if(eqArrays(arr1, arr2) === false) {
    console.log(`⛔⛔⛔ Assertion Failed: ${arr1}  ❗== ${arr2} ❌`)
  }
};


let a = ['Val', 3, "Peter", false, "false", "3"];
let b = ['Val', 3, "Peter", false, "false", "3"];
assertArraysEqual(a,b);

let c = ['Val', 3, "Peter", true, "false", "3"];
let d = ['Val', 3, "Peter", true, "false", "3"];
assertArraysEqual(c, d);