const eqArrays = (arrX, arrY) => arrX.length === arrY.length && arrX.every((x, y) => x === arrY[y]);
module.exports = eqArrays;