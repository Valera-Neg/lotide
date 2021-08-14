const _ = require('../index');
const assert = require('chai').assert;


describe("countOnly", () => {
  it ("#countOnly should return {Fang : 2,Jason: 1} ", () => {
    assert.deepEqual(_.countOnly(["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"],{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }),{"Fang" : 2,'Jason': 1});
  });
  it ("#countOnly should return {Joe : 1,'Kavith': 1, Agouhanna: 1 } ", () => {
    assert.deepEqual(_.countOnly(["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"],{ "Kavith": true, "Karima": true, "Joe": true, "Agouhanna": true }),{"Joe" : 1,'Kavith': 1, "Agouhanna": 1 });
  });
  it ("#countOnly should return {Fang : 2,Jason: 1, Salima : 2} ", () => {
    assert.deepEqual(_.countOnly(["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"],{ "Jason": true, "Karima": false, "Salima" : true , "Fang": true, "Agouhanna": false }),{"Fang" : 2,'Jason': 1, "Salima" : 2 });
  });
});
