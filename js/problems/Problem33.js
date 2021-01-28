/*
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting
to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value,
and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms,
find the value of the denominator.

Answer: 100
*/
const { greatesCommonFactor } = require('../helpers');

const isProper = (a, b) => {
  if (a === b || a > b || a % 10 === 0 || b % 10 === 0 || a > 99 || a < 11 || b > 99 || b < 11) {
    return false;
  }

  const a1 = (a / 10) | 0; // the bitwise OR is to truncate
  const a2 = a % 10;
  const b1 = (b / 10) | 0;
  const b2 = b % 10;

  if (a1 === b1) return a2 / b2 === a / b;
  if (a1 === b2) return a2 / b1 === a / b;
  if (a2 === b1) return a1 / b2 === a / b;
  if (a2 === b2) return a1 / b1 === a / b;

  return false;
};

const problem = () => {
  const fractions = [];

  for (let i = 11; i < 100; i++) {
    for (let j = 11; j < 100; j++) {
      if (isProper(i, j)) {
        fractions.push([i, j]);
      }
    }
  }

  const [f1, f2] = fractions.reduce(([pNum, pDen], [num, den]) => {
    return [pNum * num, pDen * den];
  }, [1, 1]);

  return f2 / greatesCommonFactor(f1, f2);
};

module.exports = problem;
