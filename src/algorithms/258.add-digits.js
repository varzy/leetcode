// @author : zy
// @date   : 2018-02-23
// @source : https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  return ('' + num).length < 2 ? num : addDigits(+('' + num).split('').reduce((sum, item) => sum + +item, 0))
}
