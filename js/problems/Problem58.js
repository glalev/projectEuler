/*
Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

37 36 35 34 33 32 31
38 17 16 15 14 13 30
39 18  5  4  3 12 29
40 19  6  1  2 11 28
41 20  7  8  9 10 27
42 21 22 23 24 25 26
43 44 45 46 47 48 49

It is interesting to note that the odd squares lie along the bottom right diagonal,
but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime;
that is, a ratio of 8/13 ≈ 62%.

If one complete new layer is wrapped around the spiral above, a square spiral with side length 9
will be formed. If this process is continued, what is the side length of the square spiral
for which the ratio of primes along both diagonals first falls below 10%?

Answer: 26241
*/

/*
This spiral is called Ulam spiral, and there is a formula for its diagonals:
d1 = 4 * n^2 + 1 /5 to 37/
d2 = 4 * n^2 + 2*n + 1  /7 to 43/
d3 = 4 * n^2 - 2*n + 1 /3 to 31/
d4 = 4 * n^2 - 4*n + 1 /9 to 49/ - these are all square numbers, so no need to calculated
*/

const { isPrime } = require('../helpers');

const THRESHOLD = 0.1;
const d1 = n => 4 * n ** 2 + 1;
const d2 = n => 4 * n ** 2 + 2 * n + 1;
const d3 = n => 4 * n ** 2 - 2 * n + 1;

const problem = () => {
	let length = 1;
	let count = 1;
	let primes = 0;
	let i = 1;

	while (!primes || primes / count > THRESHOLD) {
			primes += [d1(i), d2(i), d3(i)].filter(isPrime).length;
			count += 4;
			length += 2;
			i += 1;
	}

	return length;
};

module.exports = problem;
