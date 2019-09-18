/*
  The first two consecutive numbers to have two distinct prime factors are:

  14 = 2 × 7
  15 = 3 × 5

  The first three consecutive numbers to have three distinct prime factors are:

  644 = 2² × 7 × 23
  645 = 3 × 5 × 43
  646 = 2 × 17 × 19.

  Find the first four consecutive integers to have four distinct prime factors each.
  What is the first of these numbers?

  Answer: 134043
*/

const { primeFactors } = require('../helpers');

const problem = () => {
  const LENGTH = 4
  let numbers = [];

  for(let i = 646; i < Number.MAX_SAFE_INTEGER; i++) {
    const length = primeFactors(i).length;

    if (length !== LENGTH) {
      numbers = []
    } else if (numbers.length < LENGTH - 1) {
      numbers.push(i)
    } else {
      return numbers[0]
    }
  }
  return 'The number is bigger than MAX_SAFE_INTEGER, so you can\'t solve this with regular js';
};

module.exports = problem;
