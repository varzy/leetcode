// Source: https://leetcode.com/problems/detect-capital/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const arrWord = word.split('');

  return (
    arrWord.every(item => item.charCodeAt() >= 65 && item.charCodeAt() <= 90) ||
    arrWord.every(item => item.charCodeAt() >= 97 && item.charCodeAt() <= 122) ||
    (arrWord[0].charCodeAt() >= 65 &&
      arrWord[0].charCodeAt() <= 90 &&
      arrWord.slice(1).every(item => item.charCodeAt() >= 97 && item.charCodeAt() <= 122))
  );
};
