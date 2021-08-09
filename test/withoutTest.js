const _ = require('../index');
const assertArraysEqual = require('../assertArraysEqual');


const words = ["hello", "world", "lighthouse"];
_.without(words, ["lighthouse"]); 
assertArraysEqual(_.without(words, ["lighthouse"]), ['hello', 'world']);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log('**************************************');

let arrOfNum = [1, 2, 3];
_.without(arrOfNum, [1]); // => [2, 3]
assertArraysEqual(_.without(arrOfNum, [1]), [2, 3]);
assertArraysEqual(arrOfNum, [1, 2, 3]);
console.log('**************************************');

let arrOfStr = ["1", "2", "3"];
_.without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(_.without(arrOfStr, [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(arrOfStr, ["1", "2", "3"]);