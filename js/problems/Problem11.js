/*
In the 20×20 grid below, four numbers along a diagonal line have been marked in red.

08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
....
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48

The product of these numbers is 26 × 63 × 78 × 14 = 1788696.

What is the greatest product of four adjacent numbers in the same direction
(up, down, left, right, or diagonally) in the 20×20 grid?
*/

const loadData = require('../helpers').loadData;

const subProduct = (range, i, arr) => {
  if (i + range > arr.length) return 0;

  let subArr = arr.slice(i, i + range);
  return subArr.reduce((acc, a) => acc * a, 1);
};

const productsFromArray = (arr, range) => {
  return arr.map((_, i, arr) => subProduct(4, i, arr));
};

// assumes matrix is squre
const extractColumns = (matrix) => {
  let columns = [];
  for (let i = 0; i < matrix.length; i++) {
    let column = [];
    for (let j = 0; j < matrix.length; j++) {
      column.push(matrix[j][i]);
    }
    columns.push(column);
  }

  return columns;
};

const extractDiagonals = (matrix) => {
  let diagonals = [];
  for (let i = 0, l = matrix.length; i < l; i++) {
    let d = [], d1 = [], d2 = [], d3 = [];
    // todo biggest diagonals are included twice
    for (let j = 0; j < l - i; j++) {
      d.push(matrix[i + j][j]);
      d1.push(matrix[j][j + i]);
      d2.push(matrix[j][l - 1 - i - j]);
      d3.push(matrix[i + j][l - 1 - j]);
    }

    diagonals.push(d, d1, d2, d3);
  }

  return diagonals;
};

const problem = () => {
  return loadData('problem11').then(data => {
    const grid = data.split('\n').map(row => row.split(' ').map(number => parseInt(number)));

    const rows = grid.map(row => productsFromArray(row, 4));
    const diagonals = extractDiagonals(grid).map(diagonal => productsFromArray(diagonal, 4));
    const columns = extractColumns(grid).map(column => productsFromArray(column, 4));

    return [].concat(...rows, ...diagonals, ...columns).reduce((max, a) => Math.max(max, a), 0);
  });
};

module.exports = problem;
