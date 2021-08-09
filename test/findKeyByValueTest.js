const _ = require('../index');
const assertEqual = require('../assertEqual');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  musical: "Dancing In The Dark"
};
assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(_.findKeyByValue(bestTVShowsByGenre, "Dancing In The Dark"), "musical");
assertEqual(_.findKeyByValue(bestTVShowsByGenre, "Dancing In The Dark"), "drama");
assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");