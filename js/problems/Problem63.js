/*
The 5-digit number, 16807=7^5, is also a fifth power. Similarly,
the 9-digit number, 134217728=8^9, is a ninth power.

How many n-digit positive integers exist which are also an nth power?

Answer:  49
*/

const powerLenght = (n, power) => {
  return (n ** power).toString().length
}

const problem = () => {
  let result = 0

  // 10 ^ n has n + 1 digits, so the numbers we are looking for
  // may only be nth power of a number less than 10
  for (let i = 1; i < 10; i++){
    let j = 0;
    let length;

    do {
      j++
      length = powerLenght(i, j)
      if (length === j) {
         result++
       }
    } while(j <= length)
  }

  return result;
};

module.exports = problem;
