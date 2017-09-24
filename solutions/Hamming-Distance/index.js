/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xBinary = x.toString(2);
  let yBinary = y.toString(2);
  const length = Math.max(xBinary.length, yBinary.length);

  xBinary = '0'.repeat(length - xBinary.length) + xBinary;
  yBinary = '0'.repeat(length - yBinary.length) + yBinary;

  let result = 0;

  for (let i = 0; i < length; i++) {
    if (xBinary[i] !== yBinary[i]) {
      result += 1;
    }
  }

  return result;
};

module.exports = hammingDistance;
