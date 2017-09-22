/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  if (s === '') {
    return true;
  }
  if (!/[\(\)\*]{2,}/.test(s)) {
    return false;
  }

  const arr1 = s.split('');
  const arr2 = s.split('').reverse();
  const isOdd = s.length % 2 === 0;
  const middle = parseInt(isOdd ? arr1.length / 2 : arr1.length / 2 + 1);

  for (let i = 0; i < middle; i++) {
    if (!isOdd && i === middle - 1) {
      return arr1[i] === '*';
    } else {
      if (!['*', '('].includes(arr1[i]) || !['*', ')'].includes(arr2[i])) {
        return false;
      }
    }
  }

  return true;
};

module.exports = checkValidString;
