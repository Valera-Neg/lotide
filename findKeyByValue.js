// scan the object and return the first key which contains the given value
const  findKeyByValue = function(obj, title) {
  for (let name of Object.keys(obj)) {
    if (obj[name] === title) {
     return name;
    }
  }
};
module.exports = findKeyByValue;