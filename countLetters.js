//only for shallow conditionals(one level objects)
let eqObject = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);  
  const obj2Keys = Object.keys(obj2);
  
  
 if (obj1Keys.length !== obj2Keys.length) {
   return false;
   
 }
  for(let key of obj1Keys){
    if(obj1[key] !== obj2[key]) {
       return false;
     
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqObject(arr1, arr2) === true) {
     console.log(`✅ Assertion Passed: Array 1 === Array 2 👍`);
  } else if(eqObject(arr1, arr2) === false) {
    console.log(`⛔ Assertion Failed: Array 1  ❗== Array 2 ❌`)
  }
};
const countLetters = function (str){
  let newStr = str.toLowerCase()/*.split('');*/
   let result = {};
    for (let letter of newStr){
      if (letter != " ") {
        result[letter] === undefined ? result[letter] = 1 : result[letter]++;
      }    
    }
  return result;
};


assertArraysEqual(countLetters('Ternary Operator'), {t: 2, e: 2, r: 4, n: 1, a: 2, y: 1, o: 2, p: 1 });
assertArraysEqual(countLetters('Ternary Operator'), {t: 2, e: 2, r: 4, n: 1, a: 2, y: 1, o: 2, p: 1 });
assertArraysEqual(countLetters('Failed Variant'), { f: 1, a: 3, i: 2, l: 1, e: false, d: 1, v: 1, r: 1, n: 1, t: 1 });
console.log(countLetters('Failed Variant'));