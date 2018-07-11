/*
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
*/
/*
  the number of digits for the sum must have the same number of digits
  as examined number;
  The sum of 9999999 is 7 * 9 ^ 5 = 413343, wich is just 6 digits, more over
  every other 7 digit number will have smaller sum hence no 7 digit number could
  fullfill the requirment, so 999999 for wich the sum is  6 * 9 ^ 5 = 354294
  it's a reasonable upper limit
*/
const UPPER_LIMIT = 999999;
const DOWN_LIMIT = 10; // sum of one digit make no sence;

const isSumOfPower = (number, pow) => {
  const sum = number
    .toFixed()
    .split('')
    .reduce((sum, n) => Math.pow(n, pow) + sum, 0);

  return sum === number;
};

const problem = () => {
  let sum = 0;
  for (let i = DOWN_LIMIT; i < UPPER_LIMIT; i++) {
    if (isSumOfPower(i, 5)) {
      sum += i;
    }
  }
  return sum;
};

module.exports = problem;
