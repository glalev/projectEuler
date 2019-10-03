/*
The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime,
contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?

Answer: 997651
*/

const { generateNPrimes } = require('../helpers');
const primes = generateNPrimes(78497); // TODO add some function to generete primes up to some value
const getSum = (p, primes, i = 0) => {
  let sum = [];
  let n = p;
  let j = i;
  while(n > 0) {
    n -= primes[j];
    j += 1
    sum.push(primes[j]);
  }
  if (n === 0) return sum;
  if (primes[i+1] > Math.sqrt(p)) return []; // todo I have  no justification for Math.sqrt(p) it was the first to try and it just happens to work

  return getSum(p, primes, i+1);
}

const problem = () => {
  const lengths = primes.map(p => getSum(p, primes).length);
  const max = lengths.reduce((max, val, i) => Math.max(max, val), 0);
  const index = lengths.indexOf(max);

  return primes[index];
};

module.exports = problem;
