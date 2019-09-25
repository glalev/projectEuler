/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n
exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?
Answer: 7652413
*/
const { isPrimeFromPrimes, generateNPrimes, heapPermutation } = require('../helpers');
const l = 1000000;
const primes = generateNPrimes(l);

const maxPandigitPrimeNumber = (arr = [9,8,7,6,5,4,3,2,1]) => {
  // the array passed to the heapPermutation is mutated, so a copy of the original array is passed
  const max = heapPermutation(arr.slice())
    .filter((n) => isPrimeFromPrimes(n, primes))
    .reduce((max, n) => Math.max(max, n), 0);

  return max > 0 ? max : maxPandigitPrimeNumber(arr.slice(1));
};
const problem = maxPandigitPrimeNumber;

module.exports = problem;
