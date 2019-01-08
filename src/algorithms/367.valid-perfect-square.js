// @author : zy
// @date   : 2018-02-28
// @source : https://leetcode.com/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i * i === num) return true
  }
  return false
}
