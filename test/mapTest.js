const _ = require('../index');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(_.map(words, word => word ),["ground", "control", "to", "major", "tom"]);
assertArraysEqual(_.map(words, word => word.length), [ 6, 7, 2, 5, 3 ]);
assertArraysEqual(_.map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);