/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  const arr = (num + '').split('');
  if (arr.length === 1) return num;
  return addDigits(arr.reduce((a, b) => +a + +b, 0));
};

module.exports = addDigits;
