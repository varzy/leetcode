// Source: https://leetcode.com/problems/search-insert-position/
// Updated At: 2018-02-24

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const findResult = nums.findIndex(item => item === target);

  if (findResult !== -1) return findResult;
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (target > nums[i - 1] && target < nums[i]) return i;
  }
};
