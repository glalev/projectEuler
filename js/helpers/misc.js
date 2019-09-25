const _findDivisors = (proper, n) => {
  let result = proper ? [1] : [n, 1];
  for (let i = 2; i <= Math.sqrt(n); i++) {
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

const heapPermutation = (arr) => {
  const result = [];
  const _heapPermutation = (arr, size = arr.length, i) => {
    if (size === 1) result.push(parseInt(arr.join(''), 10));

    for (let i = 0; i < size; i++) {
      _heapPermutation(arr, size - 1, i);

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
  _heapPermutation(arr);

  return result;
};

module.exports = { findDivisors, findProperDivisors, initArray, heapPermutation };

// TODO add head, tail, init function for arrays and strings