const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${ actual} === ${ expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !=== ${expected}`);
    }
  };
  let head = function (array){
      let firstElement = array.shift();
      return firstElement;
  };
  assertEqual(head([5,6,7]), 5);
  assertEqual(head([]), 5);
  assertEqual(head([5,6,7]), );
  assertEqual(head(["Lighthouse", "Labs"]), "Hello");
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), );