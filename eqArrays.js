const eqArrays = (arrX, arrY) => arrX.length === arrY.length && arrX.every((x, y) => x === arrY[y]);

  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${ actual} === ${ expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !=== ${expected}`);
    }
   };
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 0, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),  false);
assertEqual(eqArrays([1, 2, 3], [1, 0, 3]), true);