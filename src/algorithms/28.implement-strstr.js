// Source: https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let isEqual = true;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          isEqual = false;
          break;
        }
      }

      if (isEqual) return i;
    }
  }

  return -1;
};

var strStr = function (haystack, needle) {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + needle.length) === needle) return i;
    }
  }

  return -1;
};

console.log(strStr('hello', 'bba'));
