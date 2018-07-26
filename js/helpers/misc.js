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

const initArray = (n, a) => {
  const arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = typeof a === 'function' ? a(i) : a;
  }
  return arr;
}
module.exports = { findDivisors, findProperDivisors, initArray };
