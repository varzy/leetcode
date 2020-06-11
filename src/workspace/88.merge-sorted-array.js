// Source: https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const calcArrByLen = (arr, len) => {
    let result = [];
    for (let i = 0; i < len; i++) {
      result.push(arr[i]);
    }
    return result;
  };

  nums1 = [...calcArrByLen(nums1, m), ...calcArrByLen(nums2, n)].sort();
};

console.log(merge([0], 0, [1], 1));
