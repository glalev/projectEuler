/*
There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5C3 = 10.

In general,

nCr =
n!
r!(n−r)!
,where r ≤ n, n! = n×(n−1)×...×3×2×1, and 0! = 1.
It is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.

How many, not necessarily distinct, values of  nCr, for 1 ≤ n ≤ 100, are greater than one-million?
*/
const MIN = 23;
const MAX = 100;
const THRESHOLD = 1000000;

const factorial = (n, acc = 1) => {
  if (n === 0) return 1;
  if (n === 1) return acc;

  return factorial(--n, acc * (n + 1));
};

const nCr = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

const problem = (treshold = THRESHOLD) => {
  let result = 0;
  for (let i = MIN; i <= MAX; i++) {
    for (let j = 1; j < i; j++) {
      if (nCr(i, j) > THRESHOLD) result++;
    }
  }
  return result;
};

module.exports = problem;
