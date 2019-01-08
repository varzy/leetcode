// @author : zy
// @date   : 2018-02-28
// @source : https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return [...new Set(nums)].length !== nums.length
}
