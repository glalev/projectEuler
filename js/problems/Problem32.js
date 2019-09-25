/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum

Answer: 45228
*/
const { heapPermutation } = require('../helpers');

const testNumber = (number, n = 1, m = 1, result = []) => {
  if (n > 4) return result;

  const d1 = 10 ** (9 - n);
  const d2 = 10 ** (9 - n - m);
  const multiplicand = Math.floor((number / d1));
  const multiplier = Math.floor((number % d1) / d2);
  const product = number % d2;

  if (multiplicand * multiplier === product) {
    result.push(product);
  }

  return m === 4 ? testNumber(number, n + 1, 1, result) : testNumber(number, n, m + 1, result);
}

const problem = () => {
  const numbers = heapPermutation([9,8,7,6,5,4,3,2,1]);

  const products = numbers.reduce((arr, n) => arr.concat(testNumber(n)), []);

  return [... new Set(products)].reduce((sum, a) => sum + a, 0);
};

module.exports = problem;
