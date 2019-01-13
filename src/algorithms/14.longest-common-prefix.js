// Source: https://leetcode.com/problems/longest-common-prefix/
// Updated At: 2018-02-12

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]

  let common = ''

  for (let i = 1; i < strs.length; i++) {
    if (i === 1) {
      common = getPrefix(strs[i - 1], strs[i])
    } else {
      common = getPrefix(common, strs[i])
    }
  }
  return common
}

const getPrefix = (s1, s2) => {
  const arr1 = s1.split('')
  const arr2 = s2.split('')

  let less
  let bigger
  if (arr1.length > arr2.length) {
    less = arr1
    bigger = arr2
  } else {
    less = arr2
    bigger = arr1
  }

  let common = []
  for (let i = 0; i < less.length; i++) {
    if (less[i] === bigger[i]) {
      common.push(less[i])
    } else {
      break
    }
  }
  return common.join('')
}
