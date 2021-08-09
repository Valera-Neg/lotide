const assert = require('chai').assert;
const middle = require('../middle');

describe ("#middle", () => {
  it ("#middle sould return ['camel', 'duck] from ['bison', 'camel', 'duck', 'elephant']", () => {
    assert.deepEqual(middle(['bison', 'camel', 'duck', 'elephant']),['camel','duck']);
  });
  it ("#middle sould return [5] from [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]),[5]);
  });
});
