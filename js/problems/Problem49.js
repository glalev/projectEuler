/*
The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330,
is unusual in two ways:
  (i) each of the three terms are prime, and,
  (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes,
exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?

Answer: 296962999629
*/

const { generateNPrimes } = require("../helpers");

const TERM = 3330;
const SEQUENCE = [1487, 4817, 8147];
const properSequence = (seq) => {
  const b = [];
  for (let i = seq.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (seq[i] - seq[j] === TERM) {
        b.push(seq[j], seq[i]);
      }
    }
  }

  return [...new Set(b)].sort((a, b) => a - b);
};
const problem = () => {
  // all the 4-digit primes, I just find the indexes by testing
  const primes = generateNPrimes(1228).slice(168);
  const permutations = primes.reduce((obj, prime) => {
    const key = prime.toString().split("").sort().join("");
    obj[key] = obj[key] || [];
    obj[key].push(prime);
    return obj;
  }, {});

  const string = Object.values(permutations)
    .map(properSequence)
    .filter((seq) => seq.length === 3 && seq[0] !== SEQUENCE[0])[0]
    .join("");

  return parseInt(string, 10);
};

module.exports = problem;
