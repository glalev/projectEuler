/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

const { plus, mult } = require('../helpers');

const problem = (n = 1000) => {
  const power = '2'.repeat(n).split('').reduce((pow, a) => mult(pow, a), '1');

  return power.split('').reduce((sum, a) => plus(sum, a), '0');
};

module.exports = problem;
