/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim().replace(/^[a-z\s]+/im, '');
  let result = +parseInt(str);
  result = isNaN(result) ? 0 : result;
  return result < 0
    ? Math.max(-2147483648, result)
    : Math.min(2147483648 - 1, result);
};

module.exports = myAtoi;
