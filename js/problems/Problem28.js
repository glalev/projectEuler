/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

Answer: 669171001
*/
/*
This apparently is a "Ulam spiral" and from the wikipedia page we can see that the diagonals
correspond to polynomial of the form:
  f(n) = 4 n^2 + b n + c
So for the first diagonal /1, 7, 21, .../ we have
  4 + b + c = 1
  16 + 4 b + c = 7    => 12 + b = 6   =>  b = -6; c = 3
hence the polynomial for this diagonal is: 4 n ^ 2 - 6 n + 3,
similarly we can get polynomials for rest of the diagonals:
  4 n ^ 2 - 8 n + 5 /1, 5, 17, .../,
  4 n ^ 2 - 10 n + 7 /1, 3, 13, .../,
  4 n ^ 2 - 4 n + 1 /1, 9, 25, .../,
*/
const { initArray } = require('../helpers');
const diagonal1 = (n) => 4 * n * n - 6 * n + 3;
const diagonal2 = (n) => 4 * n * n - 8 * n + 5;
const diagonal3 = (n) => 4 * n * n - 10 * n + 7;
const diagonal4 = (n) => 4 * n * n - 4 * n + 1;

module.exports = (n = 1001) => {
  if (n < 1 || n % 2 === 0) return 'Error: n can only be positive odd number.';
  const len = (n - 1) / 2; // number of elements in every diagonal

  const fullSum = [diagonal1, diagonal2, diagonal3, diagonal4].reduce((sum, f) => {
    const diagonalSum = initArray(len, (i) => f(i+2)).reduce((sum, a) => sum + a, 0);
    return sum + diagonalSum;
  }, 0);

  return fullSum + 1;
};
