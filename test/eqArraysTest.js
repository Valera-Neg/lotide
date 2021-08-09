const _ = require('../index');
const assertEqual = require('../assertEqual');

assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(_.eqArrays([1, 2, 3], [1, 0, 3]), false);
assertEqual(_.eqArrays([1, 2, 3], [1, false, 3]),  false);
assertEqual(_.eqArrays([1, 2, 3], [1, true, 3]), false);
assertEqual(_.eqArrays(["Karl","Salima","Agouhanna","Fang"], ["Karl","Salima","Agouhanna","Fang"]), true);