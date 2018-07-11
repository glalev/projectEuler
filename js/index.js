const index = parseInt(process.argv[2], 10);
const problems = require('./problems');
const problem = problems['problem' + index];

if (isNaN(index)) return console.log('Next time pass the problem as first paramether of type number!');
if (!problem) return console.log('There is no solution for problem' + index);

const toNuber = (str) => {
  const number = Number(str);
  return !isNaN(number) ? number : str;
}
const params = process.argv.slice(3).map(toNuber);

const start = Date.now();
const computation = problem(...params);
const log = (index, result, start, end) => {
  console.log(`\n---------------- Problem ${index} ----------------\n`);
  console.log(`The answer is: ${result}`);
  console.log(`Computation time: ${(end - start)/1000} seconds`);
  console.log('\n-------------------------------------------\n');
}

//some problems needs a text file to be firstly loaded, hence the promise
if (computation instanceof Promise){
  computation
    .then(result => log(index, result, start, Date.now()))
    .catch(error => console.error(error));
} else {
  log(index, computation, start, Date.now());
}
