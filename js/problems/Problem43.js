/*
The number, 1406357289, is a 0 to 9 pandigital number because it is made up of
each of the digits 0 to 9 in some order, but it also has a rather interesting
sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way,
we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.
*/

const isSpecial = (arr) => {
  if (arr.length !== 10) return false;

  if (arr[3] % 2 !== 0) return false;
  if ((arr[2] + arr[3] + arr[4]) % 3 !== 0) return false;
  if (arr[5] !== 0 && arr[5] !== 5) return false;
  if (parseFloat(arr.slice(4, 7).join('')) % 7 !== 0) return false; // todo why parseFloat?
  if (parseFloat(arr.slice(5, 8).join('')) % 11 !== 0) return false;
  if (parseFloat(arr.slice(6, 9).join('')) % 13 !== 0) return false;
  if (parseFloat(arr.slice(7, 10).join('')) % 17 !== 0) return false;

  return true;
};
// TODO REFACTOR THIS
let sums = 0;
const heapPermutation = (arr, size = arr.length, i) => {
  if (size === 1 && isSpecial(arr)) {
    sums += parseInt(arr.join(''));
  }

  for (let i = 0; i < size; i++) {
    heapPermutation(arr, size - 1, i);

    if (size % 2 === 1) {
      // if size is odd, swap first and last element
      let temp = arr[0];
      arr[0] = arr[size - 1];
      arr[size - 1] = temp;
    } else {
      // else size is even, swap ith and last element
      let temp = arr[i];
      arr[i] = arr[size - 1];
      arr[size - 1] = temp;
    }
  }
};

const problem = () => {
  heapPermutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return sums;
};

module.exports = problem;
