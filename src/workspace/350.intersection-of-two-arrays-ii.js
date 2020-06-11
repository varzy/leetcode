// Source: https://leetcode.com/problems/intersection-of-two-arrays-ii/
// Updated At: YEAR-MONTH-DAY

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

  for (let i = 0; i < bigger.length; i++) {
    if (smaller.indexOf(bigger[i]) !== -1) {
      result.push(bigger[i]);
    }
  }

  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
