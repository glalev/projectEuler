/*
By starting at the top of the triangle below and moving to adjacent numbers on
the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:
*/
const loadData = require('../helpers').loadData;

const problem = (dataFile = 'problem18') => {
  return loadData(dataFile)
    .then(data => {
      const arr = data.split('\n').map(row => row.split(' ').map(Number));

      for (let i = 0; i < arr.length - 1; i++) {
        let row = arr[i + 1];
        for (let j = 0; j < row.length; j++) {
          let left = arr[i][j - 1] || 0;
          let right = arr[i][j] || 0;
          row[j] += Math.max(left, right);
        }
      }

      return arr[arr.length - 1].reduce((max, a) => Math.max(max, a), 0);
    });
};

module.exports = problem;
