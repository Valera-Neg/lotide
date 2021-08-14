const assert = require('chai').assert;
const _ = require('../index');

describe('#tail', () => {
  it ("should return ['Lighthouse', 'Labs'] from ['Hello','Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(['Hello','Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it ("should return [4, 5] from [3, 4, 5]", () => {
    assert.deepEqual(_.tail([3, 4, 5]), [4, 5]);
  });
});