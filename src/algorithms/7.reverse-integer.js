// @author : zy
// @date   : 2018-02-12
// @source : https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const prefix = x < 0 ? -1 : 1
  let res =
    prefix *
    +(Math.abs(x) + '')
      .split('')
      .reverse()
      .join('')
  return Math.abs(res) > Math.pow(2, 31) - 1 ? 0 : res
}
