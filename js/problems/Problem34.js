/*
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.

Answer: 45228
*/
const {initArray} = require('../helpers');

const factorial = (n, acc = 1) => {
  if (n === 0) return 1;
  if (n === 1) return acc;

  return factorial(--n, acc * (n + 1));
};
const factorials  = initArray(10, factorial);
/*
  following a logic similar to that from problem 30 - the number of digits for the sum must have
  the same number of digits as examined number;
  The sum of 99999999 is 8 * 9! = 2903040, wich is just 7 digits, more over
  every other 8 digit number will have smaller sum, hence no 8 digit number could
  fullfill the requirment, so 9999999 is a reasonable upper limit */
const UPPER_LIMIT = factorials[9] * 7;
const test = n => {
  const sumFact = n.toString().split('').reduce((sum, a) => sum + factorials[a], 0);

  return n === sumFact
}
const problem = () => {
  const result = [];
  for (let i = 10; i < UPPER_LIMIT; i++) {
    if(test(i)) result.push(i)
  }

  return result.reduce((sum, a) => sum + a, 0);
};

module.exports = problem;
