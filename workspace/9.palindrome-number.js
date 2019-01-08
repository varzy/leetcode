// @author : zy
// @date   : 2018-MONTH-DAY
// @source : https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return (x + '').split('').slice(0, (x + '').length / 2).reduce((sum, item) => sum + +item, 0) === (x + '').split('').slice((x + '').length / 2, (x + '').length).reduce((sum, item) => sum + +item, 0)
}

console.log(
  isPalindrome(1)
)
