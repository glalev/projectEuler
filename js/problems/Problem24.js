/*
A permutation is an ordered arrangement of objects. For example, 3124 is one
possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
are listed numerically or alphabetically, we call it lexicographic order.
The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/
const factorial = (n, acc = 1) => {
  if (n === 1) return acc;

  return factorial(--n, acc * (n + 1));
};
/*
Permutation are said to be in lexicographic order, so all permutation starting
with 0 are first and there is exactly 9! or 362880 them. After the combinations
startings with zero are these startings with 1 of which there is again 9!, then
these starting with 2 and so on. In other words all combinations starting with 0
have indexes from 0 to 9!(362880), these starting with 1 - from 362880 to 2*9!(725760)
and these starting with 2 - from 725760 to 3*9!(1088640), but 1088640 > 1000000
therefore 1000000th combination definately starts with 2. From here the same
logic can be recursivly aplided for the next digits;
*/
const nextDigit = (digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], limit = 1000000, acc = '') => {
  if (digits.length === 1) return acc + digits[0];

  const fact = factorial(digits.length - 1);
  let i = 1;
  while (i * fact < limit) {
    i++;
  }
  next = digits[i - 1];
  acc += next;
  digits = digits.filter(d => d !== next);
  limit = limit - (i - 1) * fact;

  return nextDigit(digits, limit, acc);
};

const problem = () => nextDigit();

module.exports = problem;
