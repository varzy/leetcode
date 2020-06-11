// Source: https://leetcode.com/problems/keyboard-row/
// Updated At: 2018-02-24

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  let result = [];

  words.map(word => {
    let currentWord = word.toLowerCase().split('');
    let currentRow;

    if (row1.indexOf(currentWord[0]) !== -1) currentRow = row1;
    if (row2.indexOf(currentWord[0]) !== -1) currentRow = row2;
    if (row3.indexOf(currentWord[0]) !== -1) currentRow = row3;

    if (currentWord.every(item => currentRow.indexOf(item) !== -1)) {
      result.push(word);
    }
  });

  return result;
};
