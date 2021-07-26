const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${ expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  let count = 0;
  for(var key in itemsToCount) {
    
    for(var name of allItems) {
     
      if (name === key && itemsToCount[key] === true) {
        count++;
        result[key] = count;
        
      } else {
      
      }
       
    }
    count = 0;
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
  
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }))