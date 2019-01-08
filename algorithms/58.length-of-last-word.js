// @author : zy
// @date   : 2018-02-12
// @source : https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(' ')
  return arr[arr.length - 1].length
}
