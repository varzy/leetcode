// Source: https://leetcode.com/problems/judge-route-circle/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const position = [0, 0];
  moves.split('').map(item => {
    if (item === 'L') position[0]--;
    if (item === 'R') position[0]++;
    if (item === 'U') position[1]++;
    if (item === 'D') position[1]--;
  });

  return position[0] === 0 && position[1] === 0;
};
