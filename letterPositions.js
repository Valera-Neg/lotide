const letterPositions = function(sentence) {
  let newStr = sentence.toLowerCase().replace(/\s/g,'');
   
  const result = {};
  for (let i = 0; i < newStr.length; i++) {
    if (result[newStr[i]] === undefined ) {
      result[newStr[i]] = [i];
    } else {
      result[newStr[i]].push(i);
    }
  };
    return result;
};
module.exports = letterPositions;
