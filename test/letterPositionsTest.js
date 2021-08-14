const _ = require('../index');
const assert = require('chai').assert;

describe("#letterPosition", () => {
  
  it ("#letterPositions should return { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }", () =>{
    assert.deepEqual(_.letterPositions('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });

  it ("#letterPositions should return { w: [ 0 ], o: [ 1 ], r: [ 2 ], l: [ 3 ], d: [ 4 ] }", () =>{
    assert.deepEqual(_.letterPositions('World'), { w: [ 0 ], o: [ 1 ], r: [ 2 ], l: [ 3 ], d: [ 4 ] });
  });  

  it ("#letterPositions should return { h: [ 0 ], e: [ 1 ], l: [ 2, 3, 8 ], o: [ 4, 6 ],  w: [ 5 ], r: [ 7 ], d: [ 9 ]}", () =>{
    assert.deepEqual(_.letterPositions('hello World'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3, 8 ], o: [ 4, 6 ],  w: [ 5 ], r: [ 7 ], d: [ 9 ] });
  }); 
});