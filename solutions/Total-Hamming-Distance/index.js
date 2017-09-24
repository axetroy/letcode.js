/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const x = nums[i];
      const y = nums[j];

      let xBinary = x.toString(2);
      let yBinary = y.toString(2);
      const length = Math.max(xBinary.length, yBinary.length);

      xBinary = '0'.repeat(length - xBinary.length) + xBinary;
      yBinary = '0'.repeat(length - yBinary.length) + yBinary;

      for (let m = 0; m < length; m++) {
        if (xBinary[m] !== yBinary[m]) {
          result += 1;
        }
      }
    }
  }
  return result;
};

module.exports = totalHammingDistance;
