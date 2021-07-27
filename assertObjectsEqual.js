const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect; 
  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)} 👍`);
  } else if (eqObjects(obj1, obj2) === false) {
    console.log(`⛔⛔⛔ Assertion Failed:${inspect(obj1)}  ❗==  ${inspect(obj2)} ❌`);
  }
}; 
const eqArrays = (arrX, arrY) => arrX.length === arrY.length
&& arrX.every((elem, i) => elem === arrY[i]);
let eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);  
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

let a = { a: '1', b: 2 };
let q = { b: 2, a: '1'};
assertObjectsEqual(a,q); //=> true

const ab = { a: "1", b: "2" };
const ba = { a: "1", b: "2", c: "3"};
assertObjectsEqual(ab, ba); //=> talse

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3] };
const cb2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd2, cb2); // => false




