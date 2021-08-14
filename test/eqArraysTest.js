const _ = require('../index');
const assert = require('chai').assert;

describe("#eqArrays", () => { 

  it ("#eqArrays should return true", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it ("#eqArrays should return true", () => {
    assert.deepEqual(_.eqArrays(["Karl","Salima","Agouhanna","Fang"], ["Karl","Salima","Agouhanna","Fang"]), true);
  });

  it ("#eqArrays should return false", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, true, 3]), false);
  });
});