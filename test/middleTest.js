const assert = require('chai').assert;
const _ = require('../index');

describe ("#middle", () => {
  it ("#middle sould return ['camel', 'duck] from ['bison', 'camel', 'duck', 'elephant']", () => {
    assert.deepEqual(_.middle(['bison', 'camel', 'duck', 'elephant']),['camel','duck']);
  });
  it ("#middle sould return [5] from [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6, 7, 8, 9]),[5]);
  });
});
