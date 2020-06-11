// Source: https://leetcode.com/problems/zigzag-conversion/
// Updated At: 2019-01-13

/**
 * 拼凑出一个符合要求的 Z 型二维数组，然后对其进行过滤和组装
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const groupLen = numRows * 2 - 2;
  const groupNum = Math.ceil(s.length / groupLen);
  const table = [];
  for (let i = 0; i < numRows; i++) {
    table[i] = [];
  }

  for (let i = 0; i < groupNum; i++) {
    for (let j = 0; j < groupLen; j++) {
      if (!s[i * groupLen + j]) continue;

      if (j < numRows) {
        table[j][i * (numRows - 1)] = s[i * groupLen + j];
      } else {
        table[groupLen - j][(i + 1) * (numRows - 1) - (groupLen - j)] = s[i * groupLen + j];
      }
    }
  }

  return table.map(row => row.filter(item => item).join('')).join('');
};
