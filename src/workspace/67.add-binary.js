// @author : zy
// @date   : 2019-MONTH-DAY
// @source : https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const sum = a + b
  return sum % 2
}

console.log(addBinary(1, 2))
