/*
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

const isPalidrom = (number, base = 10) => {
  const numStr = number.toString(base);

  return numStr === numStr.split('').reverse().join('');
};

const toBinary = (n, str = '') => {
  if (n === 0) return str || '0';

  const add = (n % 2 === 0) ? '0' : '1';

  return toBinary(Math.floor(n / 2), add + str);
};

const problem = (limit = 1000000) => {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (isPalidrom(i) && isPalidrom(i, 2)) {
      sum += i;
    }
  }

  return sum;
};

module.exports = problem;
