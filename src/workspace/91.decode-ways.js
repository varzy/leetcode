// Source: https://leetcode.com/problems/decode-ways/

// 需要使用递归

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let result = 0;
  for (let i = 1; i <= s.length; i++) {
    const lPart = s.substring(0, i);
    console.log(lPart);
    if (lPart > 26) break;

    for (let j = i; j < s.length; j++) {
      const rPart = s.substring(i, j);
      console.log(lPart);
      if (rPart <= 26) result++;
    }
  }

  return result;
};

console.log(numDecodings('12'));
