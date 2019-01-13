// Source: https://leetcode.com/problems/number-of-segments-in-a-string/
// Updated At: 2018-03-14

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
