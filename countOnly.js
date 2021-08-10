const countOnly = function(allItems, itemsToCount) {
  let result = {};
  let count = 0;
  for (var key in itemsToCount) {
    
    for (var name of allItems) {
     
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
module.exports = countOnly;