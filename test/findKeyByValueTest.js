const _ = require('../index');
const assert = require('chai').assert;


describe("#findKeyByValue", () => { 

  it ("#findKeyByValue should return:  drama", () => {
    assert.deepEqual(_.findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire", musical: "Dancing In The Dark"}, "The Wire" ), "drama");
  });
  
    it ("#findKeyByValue should return  undefined", () => {
      assert.deepEqual(_.findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire", musical: "Dancing In The Dark"}, "That '70s Show" ), undefined);
    });

      it ("#findKeyByValue should return:  musical", () => {
        assert.deepEqual(_.findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire", musical: "Dancing In The Dark"}, "Dancing In The Dark" ), "musical");
      });
});