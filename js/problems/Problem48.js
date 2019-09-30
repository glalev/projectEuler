/*
  The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

  Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.

  Answer: 9110846700
*/

const { initArray } = require('../helpers');
const TEN_BIL = 10 ** 10;
const lastTenOfPow = (n, pow, previous = n) => {
  if (pow === 1) return previous;

  const next = (previous * n) % TEN_BIL;

  return lastTenOfPow(n, pow - 1, next);
}

const problem = () => {
  return initArray(1000, (i) => lastTenOfPow(i+1, i+1)).reduce((sum, a) => sum + a, 0) % TEN_BIL;
};

module.exports = problem;
