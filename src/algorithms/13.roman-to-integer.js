// Source: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
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

  s.split('').forEach((item, index) => {
    if (s[index + 1] && control[item] < control[s[index + 1]]) {
      sum -= control[item];
    } else {
      sum += control[item];
    }
  });

  return sum;
};

console.log(romanToInt('MCMXCIV'));
