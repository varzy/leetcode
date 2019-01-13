// Source: https://leetcode.com/problems/valid-anagram/
// Updated At: 2018-02-28

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const breakLetters = word => {
    let result = {}
    for (let i = 0; i < word.length; i++) {
      if (!result[word[i]]) {
        result[word[i]] = 1
      } else {
        result[word[i]]++
      }
    }

    return result
  }

  let lettersS = breakLetters(s)
  let lettersT = breakLetters(t)

  if (Object.keys(lettersS).length !== Object.keys(lettersT).length) {
    return false
  }

  for (let key in lettersS) {
    if (lettersS[key] !== lettersT[key]) return false
  }

  return true
}
