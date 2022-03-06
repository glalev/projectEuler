/*
The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:

1! + 4! + 5! = 1 + 24 + 120 = 145

Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:

169 → 363601 → 1454 → 169
871 → 45361 → 871
872 → 45362 → 872

It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,

69 → 363600 → 1454 → 169 → 363601 (→ 1454)
78 → 45360 → 871 → 45361 (→ 871)
540 → 145 (→ 145)

Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.

How many chains, with a starting number below one million, contain exactly sixty non-repeating terms?

The answer is: 402
*/

const { initArray } = require("../helpers");

const fact = (n) => {
  if (n === 0 || n === 1) return 1;

  return n * fact(n - 1);
};

const getFactSum = (n, factorials) => {
  return n
    .toString()
    .split("")
    .map((d) => parseInt(d))
    .reduce((sum, d) => sum + factorials[d], 0);
};

const getChain = (
  n,
  factorials,
  memo = {},
  chain = 1,
  hash = { [n]: true },
) => {
  const next = memo[n] ? memo[n] : getFactSum(n, factorials);
  memo[n] = next;
  if (hash[next]) return chain;

  hash[next] = true;

  return getChain(next, factorials, memo, chain + 1, hash);
};

const problem = (n = 1000000) => {
  const factorials = initArray(10, (n) => fact(n));
  const memo = {};
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    const chain = getChain(i, factorials, memo);
    if (chain === 60) {
      counter = counter + 1;
    }
  }

  return counter;
};

module.exports = problem;
