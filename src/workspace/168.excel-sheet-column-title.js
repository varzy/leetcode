// Source: https://leetcode.com/problems/excel-sheet-column-title/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let rate = Math.floor(n / 26);
  let remainder = n % 26;

  // 消除 26, 52 等可除尽但不进位的情况
  if (remainder === 0) {
    rate--;
    remainder = 26;
  }
};

console.log(convertToTitle(703));
