/*
It is possible to show that the square root of two can be expressed as an infinite continued fraction.
3/2, 7/5, 17/12, 41/29,
The next three expansions are 99/70, 239/169, and 577/408,
but the eighth expansion, 1393/985, is the first example where the number of digits in the numerator
exceeds the number of digits in the denominator.
In the first one-thousand expansions, how many fractions contain
a numerator with more digits than the denominator?

Answer: 153
*/

/*
With some quite simple fraction tweaking can be shown that if we have a expression of type m/n,
the next term will be (m + 2n)/(m + n). Knowing that the fist one is 3/2 the rest can be calculated
*/

const { plus, mult } = require('../helpers');
const nextFraction = (fraction) => {
  const [m, n] = fraction;

  return [plus(m, mult('2', n)), plus(m, n)]
}
const generateList = (n, list = [['3', '2']]) => {
  if (n <= 0) return [];
  if (n === 1) return list;
  const previous = list[list.length - 1]
  const next = nextFraction(previous);
  list.push(next)

  return generateList(n - 1, list)
}

const problem = () => {
  return generateList(1000).reduce((sum, [m, n]) => m.length > n.length ? sum + 1: sum, 0);
};

module.exports = problem;
