/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
104743
*/

const {isPrime, isPrimeFromPrimes} = require('../helpers');

const porblem = (n = 10001) => {
  let primes = [];
  let i = 2;
  while (n > 0) {
    if (isPrimeFromPrimes(i++, primes)) {
      primes.push(i - 1);
      n--;
    }
  }
  return i - 1;
};

module.exports = porblem;
