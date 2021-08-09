const _ = require('../index');
const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual(_.countLetters('Ternary Operator'), {t: 2, e: 2, r: 4, n: 1, a: 2, y: 1, o: 2, p: 1 });
assertObjectsEqual(_.countLetters('Ternary Operator'), {t: 2, e: 2, r: 4, n: 1, a: 2, y: 1, o: 2, p: 1 });
assertObjectsEqual(_.countLetters('Failed Variant'), { f: 1, a: 3, i: 2, l: 1, e: false, d: 1, v: 1, r: 1, n: 1, t: 1 });
console.log(_.countLetters('Failed Variant'));