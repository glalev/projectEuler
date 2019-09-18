const bigNumbers = require('./bigNumbers');
const primes = require('./primes');
const loadData = require('./loadData');
const misc = require('./misc');

module.exports = {
  ...primes,
  ...bigNumbers,
  ...misc,
  loadData,
};
