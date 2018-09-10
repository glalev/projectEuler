const { minus, plus, mult } = require('./bigNumbers');
const { isPrime, isPrimeFromPrimes, primeGenarator, ntPrime, generateNPrimes } = require('./primes');
const loadData = require('./loadData');
const { findProperDivisors, findDivisors, initArray } = require('./misc');


module.exports = {
  plus,
  minus,
  mult,
  isPrime,
  isPrimeFromPrimes,
  primeGenarator,
  ntPrime,
  loadData,
  findDivisors,
  findProperDivisors,
  initArray,
  generateNPrimes
};
