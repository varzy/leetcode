// Source: https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let bigger;
  let smaller;
  if (nums1.length > nums2.length) {
    bigger = nums1;
    smaller = nums2;
  } else {
    bigger = nums2;
    smaller = nums1;
  }

  let result = [];

  for (let i = 0; i < smaller.length; i++) {
    if (bigger.indexOf(smaller[i]) !== -1) {
      if (result.indexOf(smaller[i]) === -1) {
        result.push(smaller[i]);
      }
    }
  }

  return result;
};
