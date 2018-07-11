/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. 31875000

*/

// Brutal force

const isTriplet = (a, b, c) => {
  return a < b && b < c && (a * a + b * b) === c * c;
};

const triplets = () => {
  for (let i = 1; i < 1000; i++) {
    for (let j = i; j <= 1000; j++) {
      for (let k = j; k <= 1000; k++) {
        if ((i + j + k === 1000) && isTriplet(i, j, k)) {
          return i * j * k;
        }
      }
    }
  }
};

module.exports = triplets;
