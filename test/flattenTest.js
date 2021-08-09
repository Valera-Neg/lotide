const _ = require('../index');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(_.flatten(['Val', ['Matt', 'Tim'], 'Zev', ['Hello']]),['Val', 'Matt', 'Tim', 'Zev', 'Hello']);
assertArraysEqual(_.flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(_.flatten([9, 7, [false, 5], 5, [8]]),[9, 7, 3, 5, 5, 8]);