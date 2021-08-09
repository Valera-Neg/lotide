let _ = require('../index');
const assertEqual = require('../assertEqual');


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
_.eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
_.eqObjects(ab, abc); // => false

assertEqual(_.eqObjects(ab, ba), true);
assertEqual(_.eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
_.eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
_.eqObjects(cd, cd2); // => false

assertEqual(_.eqObjects(cd, dc), true);
assertEqual(_.eqObjects(cd, cd2), false);


const zx = { a: "1", b: "2", c: [2, 4]};
const cv = { b: "2", a: "1", c: [2, 4]};
_.eqObjects(zx, cv); // => true

const abh = { a: "1", b:[2],  c: "3" };
_.eqObjects(zx, abh); // => false

assertEqual(_.eqObjects(zx, cv), true);
assertEqual(_.eqObjects(ab, zx, abh), false);