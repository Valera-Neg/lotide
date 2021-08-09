const assertArraysEqual = require('../assertArraysEqual');


let a = ['Val', 3, "Peter", false, "false", "3"];
let b = ['Val', 3, "Peter", false, "false", "3"];
assertArraysEqual(a,b); // => true`

let c = ['Val', 3, "Peter", true, "false", "3"];
let d = ['Val', 3, "Peter", false, "false", "3"];
assertArraysEqual(c, d); // => false

assertArraysEqual(['Val', 3, "Peter", false, "false", "3"],['Val', 3, "Peter", false, "false", "3"]); // => true

assertArraysEqual(['Val', 3, "Peter", true, "false", "3"], ['Val', 3, "Peter", false, "false", "3"]); // => false