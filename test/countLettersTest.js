const _ = require('../index');
const assert = require('chai').assert;
//const assertObjectsEqual = require('../assertObjectsEqual');

describe("#countLetters", () => { 

  it ("#countLetters should return: { t: 2, e: 2, r: 4, n: 1, a: 2, y: 1, o: 2, p: 1 }", () => {
    assert.deepEqual(_.countLetters('Ternary Operator'), { t: 2, e: 2, r: 4, n: 1, a: 2, y: 1, o: 2, p: 1 });
  });

  it ("#countLetters should return: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }", () => {
    assert.deepEqual(_.countLetters('Hello World'), { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 });
  });
});







/*
assertObjectsEqual(_.countLetters('Ternary Operator'), {t: 2, e: 2, r: 4, n: 1, a: 2, y: 1, o: 2, p: 1 });
assertObjectsEqual(_.countLetters('Ternary Operator'), {t: 2, e: 2, r: 4, n: 1, a: 2, y: 1, o: 2, p: 1 });
assertObjectsEqual(_.countLetters('Failed Variant'), { f: 1, a: 3, i: 2, l: 1, e: false, d: 1, v: 1, r: 1, n: 1, t: 1 });
console.log(_.countLetters('Failed Variant'));
*/