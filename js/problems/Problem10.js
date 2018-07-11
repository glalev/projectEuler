/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

const isPrimeFromPrimes = require('../helpers').isPrimeFromPrimes;
const problem = (n = 2000000) => {
  n = parseInt(n);

  let i = 3; // starting primes from 3 so we can increment with 2
  let sum = 2; // but this is OK, because we alredy added 2 to the sum
  let primes = []; // keeping reference to all generated primes, for more easy check on next ones;

  while (i < n) {
    if (isPrimeFromPrimes(i, primes)) {
      primes.push(i);
      sum += i;
    }

    i += 2;
  }

  return sum;
};

module.exports = problem;
