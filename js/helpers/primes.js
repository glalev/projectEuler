// exceeds the call stack around 2500nt
// const ntPrime = (n, i = 3) => {
//   if (n === 1 ) return 2;
//   if(isPrime(i) && n === 2) return i;
//
//   return isPrime(i) ? ntPrime(--n, i+2) : ntPrime(n, i+2);
// }

const isPrime = (number) => {
  // if the number is 1 or it is divisible by 2 /while not beeing 2/ - it is not a prime
  if (number < 2 || (number % 2 === 0 && number !== 2)) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
};

const isPrimeFromPrimes = (number, primes) => {
  let s = Math.sqrt(number);

  for (let i = 0, l = primes.length; i < l; i++) {
    if (number % primes[i] === 0) return false;
    if (primes[i] > s) return true;
  }

  return true;
};

const ntPrime = (n) => {
  n = Number.parseInt(n);
  let primes = [];
  if (n === 1) return 2;

  let i = 3;
  while (n >= 2) {
    if (isPrimeFromPrimes(i, primes)) {
      primes.push(i);
      n--;
    }
    i += 2;
  }

  return i - 2;
};
// TODO - not working, fixed it
// uses Sieve of Eratosthenes https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// as much simple alternative of Sieve of Atkin https://en.wikipedia.org/wiki/Sieve_of_Atkin
var generatePrimesTo = (n) => {
  let off = 0;
  let primes = 'n'.repeat(n).split('').map((_, i) => i > 1);
  let next = primes.indexOf(true);
  while (next < n && next !== -1) {
    let j = next;
    while (j < n) {
      j += next;
      primes[j] = false;
    }
    let index = primes.slice(next + 1).indexOf(true);
    next = index > -1 ? next + index + 1 : -1;
  }

  return primes.map((p, i) => p ? i : p).filter(p => p);
};

module.exports = { isPrime, isPrimeFromPrimes, ntPrime };
