/*
If p is the perimeter of a right angle triangle with integral length sides,
{a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
  it's a reasonable upper limit
*/

const countSides = (p) => {
  let conter = 0;
  for (let i = Math.floor(p / 3); i <= Math.floor(p / 2); i++) {
    for (let j = Math.floor((p - i) / 2); j < i; j++) {
      let k = p - i - j;
      if (Math.pow(i, 2) === Math.pow(j, 2) + Math.pow(k, 2)) {
        conter++;
      }
    }
  }

  return conter;
};

const problem = (limit = 1000) => {
  let maxCount = 0;
  let n = 0;

  for (let i = 0; i <= limit; i++) {
    let count = countSides(i);
    if (count > maxCount) {
      maxCount = count;
      n = i;
    }
  }

  return n;
};

module.exports = problem;
