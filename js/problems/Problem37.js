/*
The number 3797 has an interesting property. Being prime itself, it is possible to continuously
remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7
Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

Answer: 748317
*/

const { isPrimeFromPrimes, primeGenarator, generateNPrimes } = require('../helpers');
const LIMIT = 11;

const isTruncable = (direction, n, primes) => {
  const isPrime = isPrimeFromPrimes(n, primes);
  if (!isPrime || n <= 7) return isPrime;
  const l = n.toString().length - 1;
  const m = direction === 'left' ? n % Math.pow(10, l) : Math.floor(n / 10);

  return isTruncable(direction, m, primes);
};
const isLeftTruncable = isTruncable.bind(null, 'left');
const isRightTruncable = isTruncable.bind(null, 'right');

//"Maximum call stack size exceeded" so no recursive difinition for me here;
const problem = (p) => {
  const numbers = [];
  const generator = primeGenarator();
  const primes = [];

  while (numbers.length < LIMIT) {
    const p = generator.next().value;

    primes.push(p);
    if (p > 7 && isLeftTruncable(p, primes) && isRightTruncable(p, primes)) {
      numbers.push(p);
    }
  }

  return numbers.reduce((sum, n) => sum + n, 0);
};

module.exports = problem;
