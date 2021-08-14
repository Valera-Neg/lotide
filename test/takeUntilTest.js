
const _ = require('../index');
const assert = require('chai').assert;

describe("#takeUntil", () => { 

  it ("#takeUntil should return: [ 1, 2, 5, 7, 2 ]", () => {
    assert.deepEqual(_.takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0 ), [ 1, 2, 5, 7, 2 ]);
  });

  it ("#takeUntil should return: [ I've, been, to, Hollywood ]", () => {
    assert.deepEqual(_.takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ',' ), [ "I've", 'been', 'to', 'Hollywood' ]);
  });
});







/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = _.takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(_.takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);

console.log('*********************************');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = _.takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(_.takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood']);
*/