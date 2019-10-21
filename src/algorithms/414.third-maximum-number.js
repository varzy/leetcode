// Source: https://leetcode.com/problems/third-maximum-number/
// Updated At: 2018-03-14

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const arr = [...new Set(nums)].sort((a, b) => b - a);
  return arr.length < 3 ? arr[0] : arr[2];
};
