const middle = arr => {
  let newArr = [];
  if(arr.length < 3) {
    return newArr;
  } else if(arr.length % 2 === 0) {
      newArr = arr.slice((arr.length / 2) - 1, (arr.length / 2) + 1 );
      return newArr;
    } else if(arr.length % 2 !== 0) {
        newArr = arr.slice((arr.length / 2) - 0.5, (arr.length / 2) + 0.5);  
        return newArr;  
      }
};
module.exports = middle;




