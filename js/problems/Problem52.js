/*
It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits,
but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
*/

const toStringSorted = number => number.toString().split('').sort((a, b) => a - b).join('');
const isPermuted = (n, multiple = 6) => {
  if (multiple === 1) return true;

  const product = n * multiple;
  const str1 = toStringSorted(n);
  const str2 = toStringSorted(product);

  return str1 === str2 ? isPermuted(n, multiple - 1) : false;
};

const problem = () => {
  let n = 1;
  while (!isPermuted(n)) {
    n = n + 1;
  }

  return n;
};

module.exports = problem;
