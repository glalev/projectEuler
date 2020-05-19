/*
A number chain is created by continuously adding the square of the digits in a number to
form a new number until it has been seen before.

For example,

44 → 32 → 13 → 10 → 1 → 1
85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop.
What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?

Answer: 8581146
*/

const MAP = {};
const addSquares = (n) => {
  return n.toString().split('').reduce((sum, s) => {
    n = parseInt(s, 10);
    return sum + n * n;
  }, 0);
};

const lastNumberFromChain = (n, previous = {}) => {
  // if we arrive on a number for which we already calculated the last number
  // not need to proceed to the rest of the chain
  if (MAP[n]) return MAP[n];
  if (previous[n] || n === 89) return n;
  previous[n] = true;

  return lastNumberFromChain(addSquares(n), previous);
};

const problem = () => {
  let result = 0;
  for (var i = 1; i < 10000000; i++) {
    const lastNmber = lastNumberFromChain(i);
    MAP[i] = lastNmber;
    if (lastNmber === 89) {
      result++;
    }
  }

  return result;
};

module.exports = problem;
