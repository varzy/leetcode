/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let i = 0; i <= c; i++) {
    for (let j = 0; j <= c; j++) {
      if (i * i + j * j === c) return true
    }
  }

  return false
}
