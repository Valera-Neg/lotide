const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it ("should return ['Lighthouse', 'Labs'] from ['Hello','Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello','Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it ("should return [4, 5] from [3, 4, 5]", () => {
    assert.deepEqual(tail([3, 4, 5]), [4, 5]);
  });
});