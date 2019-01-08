// @author : zy
// @date   : 2018-02-28
// @source : https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const lenNums = nums.length

  for (let i = 0; i < lenNums; i++) {
    for (let j = i; j < lenNums; j++) {
      if (i !== j && nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true
      }
    }
  }

  return false
}
