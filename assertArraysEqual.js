const _ = require('./index');

const assertArraysEqual = (arr1, arr2) => {
  if (_.eqArrays(arr1, arr2) === true) {
     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2} 👍`);
  } else if(_.eqArrays(arr1, arr2) === false) {
    console.log(`⛔⛔⛔ Assertion Failed: ${arr1}  ❗== ${arr2} ❌`)
  }
};
module.exports = assertArraysEqual;