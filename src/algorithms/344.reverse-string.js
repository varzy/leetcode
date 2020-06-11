// Source: https://leetcode.com/problems/reverse-string/
// Updated At: 2018-02-28

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  return s.split('').reverse().join('');
};
