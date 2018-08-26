/*
It was proposed by Christian Goldbach that every odd composite number can be written as the sum
of a prime and twice a square.

9 = 7 + 2×12
15 = 7 + 2×22
21 = 3 + 2×32
25 = 7 + 2×32
27 = 19 + 2×22
33 = 31 + 2×12

It turns out that the conjecture was false.
What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

const { initArray, generateNPrimes } = require('../helpers');
// the length on,
const len = 1000;
const primes = generateNPrimes(len);
const squares = initArray(len, (i) => 2 * (i + 1) * (i + 1));
const isSum = (n, i = 0) => {
  const prime = primes[i];
  // if the number fails the test but it is prime, that do not contradict the conjecture
  if (n < prime) return primes.includes(n);

  const isSquare = squares.includes(n - prime);
  if (isSquare) return true;

  return isSum(n, i + 1);
};
const problem = () => {
  let n = 5;
  // the later part of the check was to avoid infinite loops
  while (isSum(n) && n < primes[len - 1] + squares[len - 1]) {
    n = n + 2;
  }

  return n;
};

module.exports = problem;
