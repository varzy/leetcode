// Source: https://leetcode.com/problems/maximum-69-number/
// Updated At: 2020-05-22

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
  const str = num + '';
  const len = str.length;
  let maxNum = Array.from({ length: len })
    .fill(9)
    .join('');

  const flipped = [];
  for (let i = 0; i < len; i++) {
    if (+str[i] === 6) {
      let newStr = str.split('');
      newStr[i] = 9;
      flipped.push(+newStr.join(''));
    }
  }

  if (flipped.length === 0) return maxNum;

  let result = flipped[0];
  flipped.forEach(item => {
    if (maxNum - item > result) {
      result = item;
    }
  });

  return result;
};

console.log(maximum69Number(9996));
