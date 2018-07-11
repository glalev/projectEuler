/*
An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

const problem = () => {
  let d = '';
  let i = 0;

  while (d.length <= 1000000) {
    d += i++;
  }

  return [10, 100, 1000, 10000, 100000, 1000000]
    .map((n) => parseInt(d[n], 10)).reduce((a, b) => a * b, 1);
};

module.exports = problem;
