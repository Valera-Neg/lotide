const countLetters = function (str) {
  
  let newStr = str.toLowerCase();
   let result = {};
    for (let letter of newStr) {
      if (letter != " ") {
        result[letter] === undefined ? result[letter] = 1 : result[letter]++;
      }    
    }
  return result;
};
module.exports = countLetters;