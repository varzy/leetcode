// Source: https://leetcode.com/problems/contains-duplicate/
// Updated At: 2018-02-28

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return [...new Set(nums)].length !== nums.length
}
