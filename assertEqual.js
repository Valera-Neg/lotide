const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${ actual} === ${ expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};



//String.fromCodePoint()

assertEqual("Lighthoise Labs", "Bootcamp");
assertEqual(1,1);