/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const list = [];
  nums.forEach((a, i) => {
    nums.forEach((b, j) => {
      if (i === j || list.length === 2) return;
      if (a + b === target) {
        list[0] = i;
        list[1] = j;
      }
    });
  });
  return list;
};

module.exports = twoSum;
