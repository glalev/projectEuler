/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
*/

const largestPrimeFactor = (n = 600851475143) => {
  let factors = [];

  for (let i = 2; i <= n; i++) {
    while(n % i === 0){
      factors.push(i);
      n = n / i;
    }
  }

  return factors[factors.length - 1];
}

module.exports = largestPrimeFactor;
