/*
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

Answer: 983
*/
const calcCycle = (n, divisor, i = 0, hash = {}) => {
  if (typeof divisor !== "number") {
    const l = (n - 1).toString().length;
    return calcCycle(n, 10 ** l);
  }

  const reminder = divisor % n;
  const result = Math.floor(divisor / n);
  const next = (divisor - n * result) * 10;

  if (reminder === 0) return 0;
  if (hash[reminder]) return i - hash[reminder];

  hash[reminder] = i;

  return calcCycle(n, next, i + 1, hash);
};

const problem = (n = 1000) => {
  let max = 0;
  let result = 0;

  for (let i = 0; i <= n; i++) {
    const cycle = calcCycle(i);
    if (cycle > max) {
      max = cycle;
      result = i;
    }
  }

  return result;
};

module.exports = problem;
