/*
A palindromic number reads the same both ways. The largest palindrome made
 from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalidrom = (number) => {
  let numStr = number.toString();

  return numStr === numStr.split('').reverse().join('');
};

const largestPalindrome = (n = 3) => {
  if (n > 4) return console.warn('Well depending on your PC this will take between a minute and infinity /think infinity/, so NO!');

  let max = 0;
  let low = Math.pow(10, n - 1);
  let hi = Math.pow(10, n);

  for (var i = low; i < hi; i++) {
    for (var j = i; j < hi; j++) {
      let p = i * j;
      if (isPalidrom(p) && p > max) {
        max = p;
      }
    }
  }

  return max;
};

module.exports = largestPalindrome;
