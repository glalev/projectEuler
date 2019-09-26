/*
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?

Answer: 55
*/
const { generateNPrimes } = require('../helpers');
const rotate = (str, turn = 0, result = []) => {
  if (turn === str.length) return result;

  return rotate(str.substr(1) + str[0], turn + 1, result.concat(str));
}
const isCircular = (str, map) => {
  if (str.length === 1) return true;

  const arr = str.split('');
  const hasProperDigits = arr.every(a => a === '1' || a === '3' || a === '7' || a === '9');

  return rotate(str).every(r => map[r]);
}

const problem = () => {
  // 78498 is the number of primes smaller than 1 million
  const primesMap = generateNPrimes(78498).reduce((map, n) => {
    map[n] = true;
    return map;
  }, {});

  return Object.keys(primesMap).filter(n => isCircular(n, primesMap)).length;
};

module.exports = problem;
