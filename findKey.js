// scan the object and return the first key for which the callback returns a truthy value
const findKey = function(obj, callback) {
for (let [key,value] of Object.entries(obj)) {
    if (callback(value)) {
      return key;
    } 
  }
 return undefined;
};
module.exports = findKey;