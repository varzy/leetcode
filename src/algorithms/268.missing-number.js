// @author : zy
// @date   : 2018-02-28
// @source : https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b)
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== i) return i
  }
  return nums.length
}
