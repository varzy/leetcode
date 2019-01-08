// @author : zy
// @date   : 2018-02-28
// @source : https://leetcode.com/problems/contains-duplicate-iii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const lenNums = nums.length

  for (let i = 0; i < lenNums; i++) {
    for (let j = i; j < lenNums; j++) {
      if (i !== j && Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
        return true
      }
    }
  }

  return false
}
