/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x = 0;
  let y = 0;
  const actions = moves.split('');
  while (actions.length) {
    const action = actions.shift();
    switch (action) {
      case 'U':
        y = y - 1;
        break;
      case 'R':
        x = x + 1;
        break;
      case 'D':
        y = y + 1;
        break;
      case 'L':
        x = x - 1;
        break;
      default:
        throw new Error(`Invalid Action ${action}`);
    }
  }
  return x === 0 && y === 0;
};

module.exports = judgeCircle;
