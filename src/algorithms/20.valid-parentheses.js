// Source: https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < s.length; i++) {
    if (['(', '[', '{'].includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (map[stack[stack.length - 1]] === s[i]) stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(isValid('()[[()]}'));
