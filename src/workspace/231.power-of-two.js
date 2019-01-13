/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n >= 2 && n % 2 !== 0) return false
  if (n / 2 === 1 || n === 1) return true
  return isPowerOfTwo(n / 2)
}

console.log(isPowerOfTwo(0))
