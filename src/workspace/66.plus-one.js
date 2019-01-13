// Source: https://leetcode.com/problems/plus-one/
// Updated At: YEAR-MONTH-DAY

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let result = []
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] + 1 === 10) {
      result.push(0)
      result.push(1)
    } else {
      result.push(digits[i] + 1)
    }
  }

  return result.sort((a, b) => b - a)
}

console.log(plusOne([0]))
