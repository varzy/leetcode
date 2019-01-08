// @author : zy
// @date   : 2018-MONTH-DAY
// @source : https://leetcode.com/problems/PROBLEM_NAME/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let bigger
  let smaller
  if (+num1 < +num2) {
    bigger = +num2
    smaller = +num1
  } else {
    bigger = +num1
    smaller = +num2
  }

  let sum = 0
  for (let i = 0; i < smaller; i++) {
    sum += bigger
  }

  return sum + ''
}

console.log(
  multiply("123456789", "987654321")
)
