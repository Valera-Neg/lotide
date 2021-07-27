const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${ actual} === ${ expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = (arrX, arrY) => arrX.length === arrY.length
&& arrX.every((elem, i) => elem == arrY[i]);

let eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);  
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for(let key of obj1Keys){
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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);


const zx = { a: "1", b: "2", c: [2, 4]};
const cv = { b: "2", a: "1", c: [2, 4]};
eqObjects(zx, cv); // => true

const abh = { a: "1", b:[2],  c: "3" };
eqObjects(zx, abh); // => false

assertEqual(eqObjects(zx, cv), true);
assertEqual(eqObjects(ab, zx, abh), false);
