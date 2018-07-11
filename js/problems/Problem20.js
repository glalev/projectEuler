/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

const mult = require('../helpers').mult;

const factorial = (n, acc = '1') => {
  if (n === 1) return acc;

  const number = n.toString(10);
  return factorial(--n, mult(acc, number));
};

const problem = (n = 100) => {
  return factorial(n).split('').map(Number).reduce((acc, n) => acc + n, 0);
};

module.exports = problem;
