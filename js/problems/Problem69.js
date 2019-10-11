/*
Euler's Totient function, φ(n) [sometimes called the phi function], is used to determine the number
of numbers less than n which are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8,
are all less than nine and relatively prime to nine, φ(9)=6.

It can be seen that n=6 produces a maximum n/φ(n) for n ≤ 10.

Find the value of n ≤ 1,000,000 for which n/φ(n) is a maximum.

Answer: 510510
*/

const { primeFactors, initArray } = require('../helpers');
const UPPER_LIMIT = 1000000;

const totient = (n) => {
  const pFarctors = primeFactors(n);

  return Math.round(pFarctors.reduce((product, p) => product * (1 - 1 / p), n));
}

const problem = () => {
  const maxIndex = initArray(UPPER_LIMIT, (i) => (i + 1) / totient(i + 1))
    .reduce((max, t, i, arr) => t > arr[max] ? i : max, 0);

  return maxIndex + 1;
};

module.exports = problem;