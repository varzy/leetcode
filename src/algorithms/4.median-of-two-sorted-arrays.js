// Source: https://leetcode.com/problems/median-of-two-sorted-arrays/
// Updated At: 2018-02-28

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
  const lenSorted = sorted.length;

  return lenSorted % 2 !== 0
    ? sorted[Math.floor(lenSorted / 2)]
    : sorted[lenSorted / 2 - 1] + (sorted[lenSorted / 2] - sorted[lenSorted / 2 - 1]) / 2;
};
