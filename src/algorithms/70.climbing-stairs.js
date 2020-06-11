// Source: https://leetcode.com/problems/climbing-stairs/

/**
 * 本质是斐波那契数列问题
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let sum = 0;
  let n1 = 1;
  let n2 = 2;

  while (n > 2) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    n--;
  }

  return sum;
};
