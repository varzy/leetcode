// Source: https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if ((i % 3 === 0) & (i % 5 !== 0)) {
      arr.push('Fizz');
    } else if ((i % 3 !== 0) & (i % 5 === 0)) {
      arr.push('Buzz');
    } else if (i % 15 === 0) {
      arr.push('FizzBuzz');
    } else {
      arr.push('' + i);
    }
  }

  return arr;
};
