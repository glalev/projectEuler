/*
A googol (10^100) is a massive number: one followed by one-hundred zeros;
100^100 is almost unimaginably large: one followed by two-hundred zeros.
Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, a^b, where a, b < 100,
what is the maximum digital sum?
*/
const { plus, mult, initArray } = require('../helpers');
const powSum = (n, p) => {
  return initArray(p, n)
    .reduce((pow, a) => mult(pow, a), '1')
    .split('')
    .reduce((sum, a) => sum + parseInt(a), 0);
};

const problem = (n, p) => {
  let max = 0;
  // assuming that the result is in the end of the list /e.i. ist 90tish on power 90tish/
  for (let i = 90; i < 100; i++) {
    for (let j = 90; j <= 100; j++) {
      const n = powSum(i.toString(), j);
      max = Math.max(n, max);
    }
  }
  return max;
};

module.exports = problem;
