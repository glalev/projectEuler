/*
The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

`73167176531330624919225119674426574742355349194934
.....
.....
71636269561882670428252483600823257530420752963450`

Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

*/
// const subProduct = (arr) => {
//   return arr.reduce((acc, a)=> acc * a, 1);
// }
const loadData = require('../helpers').loadData;
const subProduct = (range, i, arr) => {
  if (i + range > arr.length) return 0;

  let subArr = arr.slice(i, i + range);
  return subArr.reduce((acc, a) => acc * a, 1);
};

const porblem = (n = 13) => {
  return loadData('problem8').then(str => {
    return str
      .replace(/\n/g, '')
      .split('')
      .map(a => Number.parseInt(a, 10))
      .map((_, i, arr) => subProduct(n, i, arr))
      .sort((a, b) => b - a)[0];
  });
};

module.exports = porblem;
