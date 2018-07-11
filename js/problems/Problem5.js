/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

const devisibleByAllTo20 = (number) => {
  for (let i = 11; i <= 20; i++) {
    if (number % i !== 0) return false;
  }
  return true;
};

const porblem = () => {
  let i = 1;
  while (!devisibleByAllTo20(i)) {
    i++;
  }
  return i;
};

module.exports = porblem;
