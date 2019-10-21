// Source: https://leetcode.com/problems/length-of-last-word/
// Updated At: 2018-02-12

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
};
