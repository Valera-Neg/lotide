const _ = require('../index');
const assert = require('chai').assert;

describe("#map", () => { 

  it ("#map should return [ground, control, to, major, tom]", () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word ), ["ground", "control", "to", "major", "tom"] );
  });

  it ("#map should return [ 6, 7, 2, 5, 3 ]", () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word.length), [ 6, 7, 2, 5, 3 ] );
  });

  it ("#map should return [g, c, t, m, t,]", () => {
    assert.deepEqual(_.map(["ground", "control", "to", "major", "tom"], word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
  });
});