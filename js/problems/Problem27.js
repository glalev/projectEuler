/*
Euler discovered the remarkable quadratic formula:

n2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39.
 However, when n=40,402+40+41=40(40+1)+41 is divisible by 41,
 and certainly when n=41,412+41+41 is clearly divisible by 41.

The incredible formula n2−79n+1601 was discovered, which produces 80 primes for the consecutive
values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic expression that produces the
maximum number of primes for consecutive values of n, starting with n=0.

Answer: -59231
*/

const { isPrimeFromPrimes, generateNPrimes } = require('../helpers');
// generating first 1000 primes for faster primality check,
const primes = generateNPrimes(1000);
const test = (fn) => {
  let i = 0;

  while (isPrimeFromPrimes(fn(i), primes)) {
    i++;
  }

  return i;
};

module.exports = () => {
  let max = 0;
  let product = 0;
  for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      const len = test((n) => n * n + a * n + b);
      if (len > max) {
        max = len;
        product = a * b;
      }
    }
  }

  return product;
};
