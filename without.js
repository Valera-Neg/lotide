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


const without = (source, itemsToRemove) => {
  let unmached = [];
  for(let i = 0; i < source.length; i++){
    if(itemsToRemove.indexOf(source[i]) === -1){
      unmached.push(source[i]);
    }
  };
  for(let j = 0; j < itemsToRemove.length; j++){
    if(source.indexOf(itemsToRemove[j]) === -1){
      unmached.push(itemsToRemove[j]);
    }   
  }
   return unmached;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 

assertArraysEqual(words, ["hello", "World", "lighthouse"]);
console.log(without(words, ["lighthouse"]));