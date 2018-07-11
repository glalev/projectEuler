const countDivisors = (n) => {
  let limit = Math.sqrt(n);
  let count = (limit * limit === n) ? 1 : 0;

  for (let i = 1; i < limit; i++) {
    if (n % i === 0) count += 2;
  }

  return count;
};

const problem = (n = 500) => {
  let number = 1;
  let i = 1;

  while (countDivisors(number) <= n) {
    i++;
    number += i;
  }

  return number;
};

module.exports = problem;
