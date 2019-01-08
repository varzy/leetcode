// @author : zy
// @date   : 2019-MONTH-DAY
// @source : https://leetcode.com/problems/triangle/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  return triangle.reduce((sum, item) => (sum += Math.min(...item)), 0)
}

console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]))
