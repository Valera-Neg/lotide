const _ = require('../index');
const assertArraysEqual = require('../assertArraysEqual');

console.log(_.letterPositions('hello World'));
assertArraysEqual(_.letterPositions("hello").e, [1]);
assertArraysEqual(_.letterPositions("hello").l, [2, 3]);
assertArraysEqual(_.letterPositions("hello World").l, [2, 3, 8]);
assertArraysEqual(_.letterPositions("hello World").o, [4, 6]);