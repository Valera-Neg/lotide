const _ = require('../index');
const assert = require('chai').assert;

describe("#flatten", () => { 
it ("#flatten should return ['Val', 'Matt', 'Tim', 'Zev', 'Hello']", () => {
  assert.deepEqual(_.flatten(['Val', ['Matt', 'Tim'], 'Zev', ['Hello']]),['Val', 'Matt', 'Tim', 'Zev', 'Hello']);
  });
  
  it ("#flatten should return [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
    });
    
    it ("#flatten should return [9, 7, false, 5, 5, 8]", () => {
      assert.deepEqual(_.flatten([9, 7, [false, 5], 5, [8]]), [9, 7, false, 5, 5, 8]);
      });
});