// Source: https://leetcode.com/problems/palindrome-number/

/**
 * 将数字转为字符串，从中间进行分割。将左半边和右半边的反转结果进行比较
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const sx = x + '';

  const isEven = sx.length % 2 === 0;
  const left = isEven ? sx.slice(0, sx.length / 2) : sx.slice(0, (sx.length - 1) / 2);
  const right = isEven ? sx.slice(sx.length / 2) : sx.slice((sx.length + 1) / 2);

  return left === right.split('').reverse().join('');
};
