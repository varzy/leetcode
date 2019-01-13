// Source: https://leetcode.com/problems/find-the-difference/
// Updated At: 2018-02-23

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const arrS = s.split('').sort()
  const arrT = t.split('').sort()

  for (let i = 0; i < arrT.length; i++) {
    if (arrS[i] !== arrT[i]) return arrT[i]
  }
}
