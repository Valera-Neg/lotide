const _ = require('../index');
const assert = require('chai').assert;


describe("#without", () => { 

  it ("#without should return:  ['hello', 'world']", () => {
    assert.deepEqual(_.without(["hello", "world", "lighthouse"], ["lighthouse"]), ['hello', 'world']);
  });

  it ("#without should return:   [1, 2]", () => {
    assert.deepEqual(_.without(["1", "2", "3"], [1, 2, "3"]),   ["1", "2"]);
  });

  it ("#without should return:   [1, 2]", () => {
    assert.deepEqual(_.without([1, 2, 3],  [1]),   [2, 3]);
  });
});
