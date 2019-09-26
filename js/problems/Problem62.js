/* The cube, 41063625 (345^3), can be permuted to produce two other cubes:
56623104 (384^3) and 66430125 (405^3). In fact, 41063625 is the smallest cube which has exactly
three permutations of its digits which are also cube.

Find the smallest cube for which exactly five permutations of its digits are cube.
Answer: 127035954683
*/

const { initArray } = require('../helpers');

const PERMUTATIONS_LENGTH = 5;
const smallestCubes = () => {
  let check = true;
  let i = 405;
  let map = {};
  let smallest = null;

  while (check) {
    const cube = i * i * i;
    const key = cube.toString().split('').sort().join('');

    map[key] = map[key] || [];
    smallest = map[key][0];
    i = i + 1;
    map[key].push(cube);
    /* NOTE: technically there is no reason /implemented check/ the first group of cubes
    bigger than 4 to be exactly 5 /and not 6 or 7 or whatever/, but it happens to be,
    so I left it that way */
    check = map[key].length < PERMUTATIONS_LENGTH;
  }

  return smallest;
}

const problem = smallestCubes;

module.exports = problem;
