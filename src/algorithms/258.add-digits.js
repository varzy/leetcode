// Source: https://leetcode.com/problems/add-digits/
// Updated At: 2018-02-23

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return ('' + num).length < 2
    ? num
    : addDigits(+('' + num).split('').reduce((sum, item) => sum + +item, 0));
};
