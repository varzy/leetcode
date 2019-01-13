/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const m1 = 1
  const m2 = 2
  let count = 0

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (m1 * i + m2 * j === n || m1 * j + m2 * i === n) count++
    }
  }

  return count
}

console.log(climbStairs(2))
