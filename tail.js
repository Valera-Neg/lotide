const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${ actual} === ${ expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};
let tail = function(words) {
  let tailOfArr = words.slice(1);
  return tailOfArr;
};  
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);