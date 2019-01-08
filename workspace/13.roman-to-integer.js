// @author : zy
// @date   : 2018-MONTH-DAY
// @source : https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const control = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  return s.split('').reverse().reduce((sum, item) => sum + control[item], 0)
}

console.log(
  romanToInt("MCMXCVI")
)
