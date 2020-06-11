// Source: https://leetcode.com/problems/max-consecutive-ones/
// Updated At: 2018-02-23

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let currentMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      max++;
    } else {
      max = 0;
    }

    if (currentMax < max) currentMax = max;
  }

  return currentMax;
};
