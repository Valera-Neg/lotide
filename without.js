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


const without = (source, itemsToRemove) => {
  let unmached = [];
  for(let i = 0; i < source.length; i++){
    if(itemsToRemove.indexOf(source[i]) === -1){
      unmached.push(source[i]);
    }
  };
   return unmached;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(without(words, ["lighthouse"]), ['hello', 'world']);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log('**************************************');

let arrOfNum = [1, 2, 3];
without(arrOfNum, [1]); // => [2, 3]
assertArraysEqual(without(arrOfNum, [1]), [2, 3]);
assertArraysEqual(arrOfNum, [1, 2, 3]);
console.log('**************************************');

let arrOfStr = ["1", "2", "3"];
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, 2, "3"]));
assertArraysEqual(without(arrOfStr, [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(arrOfStr, ["1", "2", "3"]);