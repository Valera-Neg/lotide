const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
  results.push(callback(item));
  }
return results;
};
const results1 = map(words, word => word[0]);
//console.log(results1);

const eqArrays = (arrX, arrY) =>
 arrX.length === arrY.length &&
 arrX.every((elem, i) => elem == arrY[i]);

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected) === true) {
     console.log(`✅ Assertion Passed:  ${actual} === ${expected} 👍`);
  } else if(eqArrays(actual, expected) === false) {
    console.log(`⛔ Assertion Failed:  ${actual}  ❗== ${expected} ❌`);
  }
};

assertArraysEqual(map(words, word => word ),["ground", "control", "to", "major", "tom"]);
assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3 ]);
assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
