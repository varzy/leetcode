// @author : zy
// @date   : 2018-03-14
// @source : https://leetcode.com/problems/number-of-segments-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  const arr = s.split(' ')
  let final = []
  arr.map(item => {
    if (item !== '') final.push(item)
  })

  return final.length
}
