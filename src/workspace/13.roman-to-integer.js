// Source: https://leetcode.com/problems/roman-to-integer/
// Updated At: YEAR-MONTH-DAY

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const control = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;

  // for (let i = 1; i < s; i++) {
  //   const isSpecial = s[i] === 'I' && (s[i - 1] === 'V' || s[i - 1] === 'X')
  //   if (s[i - 1])
  // }

  return control;
};

console.log(romanToInt('MCMXCIV'));
