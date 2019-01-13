// Source: https://leetcode.com/problems/majority-element/
// Updated At: 2018-02-24

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const target = nums.length / 2
  let temp = {}

  for (let i = 0; i < nums.length; i++) {
    if (!temp[nums[i]]) {
      temp[nums[i]] = 1
    } else {
      temp[nums[i]]++
    }
  }

  for (let key in temp) {
    if (+temp[key] > target) {
      return +key
    }
  }
}
