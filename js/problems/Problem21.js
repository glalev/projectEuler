/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b
are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

Answer: 31626
*/

const {findProperDivisors, initArray} = require('../helpers');

module.exports = (n = 10000) => {
  const sum = (a, b) => a + b;
  const divisorsSum = (i) => findProperDivisors(i).reduce(sum, 0);

  return initArray(n + 1, divisorsSum)
    .map((sum, i, arr) => sum < i && arr[sum] === i ? sum + i : 0)
    .reduce(sum, 0);
};
