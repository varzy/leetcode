// Source: https://leetcode.com/problems/rotate-array/
// Updated At: 2018-03-14

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = 0; i < k % nums.length; i++) {
    nums.unshift(nums.pop(nums[nums.length - 1]))
  }
}