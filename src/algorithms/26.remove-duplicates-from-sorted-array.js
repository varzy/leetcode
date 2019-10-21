// Source: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Updated At: 2018-03-14

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  nums.unshift(false);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }

  nums.shift();

  return nums.length;
};
