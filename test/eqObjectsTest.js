let _ = require('../index');
const assert = require('chai').assert;


describe("#eqObjects", () => { 

  it ("#eqObjects should return true", () => {
    assert.deepEqual(_.eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
    it ("#eqObjects should return false", () => {
      assert.deepEqual(_.eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
    });
      it ("#eqObjects should return false", () => {
        assert.deepEqual(_.eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
      });
});
