const _findDivisors = (proper, n) => {
  let result = proper ? [1] : [n, 1];
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i !== i) result.push(n / i);
      result.push(i);
    }
  }
  return result;
};
const findDivisors = _findDivisors.bind(null, false);
const findProperDivisors = _findDivisors.bind(null, true);

module.exports = { findDivisors, findProperDivisors };
