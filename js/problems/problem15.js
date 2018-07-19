/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

Answer: 137846528820
*/

const problem = (n = 20, m = 20) => {
  const row = Array(m).fill(0);
  const array = Array(n).fill(row);

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      const left = array[i][j - 1] || 1;
      const up = array[i - 1] ? array[i - 1][j] : 1;

      array[i][j] = left + up;
    }
  }

  return array[n - 1][m - 1];
};

module.exports = problem;
