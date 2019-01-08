// @author : zy
// @date   : 2019-MONTH-DAY
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

  let sum = 0
  for (let i = 1; i < s.length; i++) {
    // 前面数字大于后面
    if (control[s[i]] < control[s[i - 1]]) {
      sum += control[s[i - 1]]
    } else {
      sum -= control[s[i - 1]]
    }
  }

  return sum
}

console.log(romanToInt('MCMXCIV'))
