const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${ actual} === ${ expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const  findKeyByValue = function(obj, title){
  for (let name of Object.keys(obj)) {
    if(obj[name] === title) {
     return name
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  musical: "Dancing In The Dark",
  drama: "The Straigth Stoty"
};
console.log(findKeyByValue(bestTVShowsByGenre,"The Straigth Stoty"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Straigth Stoty"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Dancing In The Dark"), "musical");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Dancing In The Dark"), "drama");