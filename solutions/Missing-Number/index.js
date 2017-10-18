/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const max = Math.max.apply(Math, nums);
  for (let i = 0; i < max; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return max + 1;
};

module.exports = missingNumber;
