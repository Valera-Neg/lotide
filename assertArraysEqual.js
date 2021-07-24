const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${ actual} === ${ expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};
const eqArrays = (arrX, arrY) =>
 arrX.length === arrY.length &&
 arrX.every((x, y) => x === arrY[y]);

const assertArraysEqual = (arr1, arr2) => {
  if (assertEqual(eqArrays(arr1, arr2), true) === true){
     console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } 
};


//let a = ['Val', 3, "Peter", false, "false", "3"];
//let b = ['Val', 3, "Peter", false, "false", "3"];
//assertArraysEqual(a,b);