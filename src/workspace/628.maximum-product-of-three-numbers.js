// Source: https://leetcode.com/problems/maximum-product-of-three-numbers/
// Updated At: YEAR-MONTH-DAY

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let arr = nums.sort((a, b) => b - a)
  let result = 1

  for (let i = 0; i < 3; i++) {
    result = result * arr.shift()
  }

  return result
}

console.log(maximumProduct([-4, -3, -2, -1, 60]))
