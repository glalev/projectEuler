/*
The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28.
 In fact, there are exactly four numbers below fifty that can be expressed in such a way:

28 = 22 + 23 + 24
33 = 32 + 23 + 24
49 = 52 + 23 + 24
47 = 22 + 33 + 24

How many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?

Answer: 1097343
*/

const { isPrime } = require('../helpers');
const LIMIT = 50000000;
const squares = [4];
const cubes = [8];
const fourths = [16];
const numbers = {};

const problem = () => {
	for (let i = 3, limit = Math.sqrt(LIMIT); i < limit; i += 2) {
		if (isPrime(i)) {
			const sq = i ** 2;
			const cb = i ** 3;
			const ft = i ** 4;

			if (sq < LIMIT) squares.push(sq);
			if (cb < LIMIT) cubes.push(cb);
			if (ft < LIMIT) fourths.push(ft);
		}
	}
	for (let s = 0; s < squares.length; s++) {
		for (let c = 0; c < cubes.length; c++) {
			for (let f = 0; f < fourths.length; f++) {
				const n = squares[s] + cubes[c] + fourths[f];
				if(n < LIMIT) {
					numbers[n] = true;
				}
			}
		}
	}

	return Object.keys(numbers).length;
};

module.exports = problem;
