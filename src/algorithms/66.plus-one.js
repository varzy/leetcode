// Source: https://leetcode.com/problems/plus-one/
// Updated At: 2019-01-13

/**
 * [9]    => [1, 0]
 * [9, 9] => [1, 0, 0]
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits[digits.length - 1]++;
  for (let i = digits.length; i > 0; i--) {
    if (digits[i] === 10) {
      digits[i - 1]++;
      digits[i] = 0;
    }
  }

  return digits.join('').split('');
};
