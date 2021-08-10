const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    if (!callback(item)) { // push items till false;
      results.push(item);
    } else {  // break if true;
      break;
    }
  }
  return results;
  };
  module.exports = takeUntil;