
/*
 Longest Collatz sequence
 Problem 14
 The following iterative sequence is defined for the set of positive integers:

 n ? n/2 (n is even)
 n ? 3n + 1 (n is odd)

 Using the rule above and starting with 13, we generate the following sequence:

 13 ? 40 ? 20 ? 10 ? 5 ? 16 ? 8 ? 4 ? 2 ? 1
 It can be seen that this sequence (starting at 13 and finishing at 1)
 contains 10 terms. Although it has not been proved yet (Collatz Problem),
 it is thought that all starting numbers finish at 1.

 Which starting number, under one million, produces the longest chain?

 NOTE: Once the chain starts the terms are allowed to go above one million.

 ANSWER: 837799
 */

const sequenceLength = (n, count = 1) => {
  let next = n % 2 === 0 ? n / 2 : 3 * n + 1;

  return (next === 1) ? ++count : sequenceLength(next, ++count);
};

const longestSequence = () => {
  let max = 0;
  let number = 0;

  for (let i = 1; i <= 1000000; i++) {
    let l = sequenceLength(i);
    if (max < l) {
      max = l;
      number = i;
    }
  }

  // The number is 'number' and the length is 'max'
  return number;
};

module.exports = longestSequence;
