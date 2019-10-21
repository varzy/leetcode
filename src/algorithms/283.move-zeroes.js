// Source: https://leetcode.com/problems/move-zeroes/
// Updated At: 2018-02-23

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let indexs = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      indexs.push(i);
    }
  }

  for (let i = 0; i < indexs.length; i++) {
    nums.splice(indexs[i] - i, 1);
    nums.push(0);
  }
};
