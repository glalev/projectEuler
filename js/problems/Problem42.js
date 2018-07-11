/*
The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1);
so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical
position and adding these values we form a word value. For example,
the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is
a triangle number then we shall call the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'), a 16K text file
containing nearly two-thousand common English words, how many are triangle words?
*/

const loadData = require('../helpers').loadData;
/*
  t(n) = n/2*(n+1) can be rewritten as an quadratic equation: n^2 + n + 8t = 0,
  which has 2 solutions (discriminant > 0), so if one of the equation's solutions is
  positive integer then t is a triangle number and the aforementioned solution is its index;
*/
const isTriangleNumber = (t) => {
  const n1 = (-1 + Math.sqrt(1 + 8 * t)) / 2;
  const n2 = (-1 - Math.sqrt(1 + 8 * t)) / 2;

  return (n1 > 0 && n1 % 1 === 0) || (n2 > 0 && n2 % 1 === 0);
};

const stringToValue = (str) => {
  return str.toUpperCase()
    .replace(/"/g, '')
    .split('')
    .reduce((sum, char) => sum + (char.charCodeAt(0) - 64), 0);
};

const problem = async (n) => {
  const data = await loadData('problem42');

  return data.split(',').map(stringToValue).filter(isTriangleNumber).length;
};

module.exports = problem;
