// @author : zy
// @date   : 2018-02-23
// @source : https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(' ')
    .map(item => item.split('').reverse().join(''))
    .join(' ')
}
