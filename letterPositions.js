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


const letterPositions = function(sentence) {
  let newStr = sentence.toLowerCase().replace(/\s/g,'');
   
  const result = {};
  for (let i = 0; i < newStr.length; i++){
    if (result[newStr[i]] === undefined){
      result[newStr[i]] = [i];
    }else{
      result[newStr[i]].push(i);
    }
  }
      
       
   return result;
};
console.log(letterPositions('hello World'));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello World").l, [2, 3, 8]);
assertArraysEqual(letterPositions("hello World").o, [4, 6]);
