const { minus, plus, mult } = require('./bigNumbers');
const { isPrime, isPrimeFromPrimes, ntPrime } = require('./primes');
const loadData = require('./loadData');
const { findProperDivisors, findDivisors, initArray } = require('./misc');


module.exports = {
  plus,
  minus,
  mult,
  isPrime,
  isPrimeFromPrimes,
  ntPrime,
  loadData,
  findDivisors,
  findProperDivisors,
  initArray
};
