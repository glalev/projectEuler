/*
Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

37107287533902102798797998220837590246510135740250...
*/
const { plus, loadData } = require('../helpers');

const problem = () => {
  return loadData('problem13')
    .then(data => {
      const numbers = data.split('\n');
      return plus(...numbers).slice(0, 10);
    });
};

module.exports = problem;
