/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
*/
const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// 'fourteen' and especially 'thirteen' don't really belong here, but fuck english spelling of 40 and 14;
const UNIQUE = ONES.concat(['ten', 'eleven', 'twelve', 'thirteen', 'fourteen']);
const TENS = { 2: 'twen', 3: 'thir', 4: 'for', 5: 'fif', 8: 'eigh' };

const getUnique = number => UNIQUE[number];
const getTeen = (number) => {
  const [_, second] = number.toString().split('').map(Number);
  const prefix = TENS[second] || ONES[second];

  return prefix + 'teen';
};
const getTy = (number) => {
  const [first, second] = number.toString().split('').map(Number);
  const prefix = (TENS[first] || ONES[first]) + 'ty';
  const postfix = second > 0 ? '-' + getUnique(second) : '';

  return prefix + postfix;
};
// 256963 - two hundred fifty-six thousand, nine hundred sixty-three
const toString = (number, prefix = '') => {
  if (number === 0 && prefix) return '';
  if (number < 15) return prefix + getUnique(number);
  if (number < 20) return prefix + getTeen(number);
  if (number < 100) return prefix + getTy(number);
  if (number < 1000) {
    const first = Number.parseInt(number.toString()[0]);
    const rest = Number.parseInt(number.toString().slice(1));

    return toString(first) + ' hundred' + toString(rest, ' and ');
  }
  if (number === 1000) return 'one thousand';

  return console.error('Only numbers from 1 to 1000 are suported');
};

const problem = () => {
  let allLetters = '';
  for (let i = 1; i < 1001; i++) {
    allLetters += toString(i);
  }

  return allLetters.replace(/[\s-]/g, '').length;
};
// const problem = number => toString(number);
module.exports = problem;
