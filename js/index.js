const arg = process.argv[2];
const index = parseInt(arg, 10);
const fs = require('fs');
// const problems = require('./problems');
// const problem = problems['problem' + index];
const logProblems = () => {
  console.log('giting the problems');
  fs.readdir('./problems/', (error, data) => {
    if (error) return console.erorr(error);
    const problems = data
      .filter(file => file.toLowerCase().includes('problem'))
      .map(file => parseInt(file.toLowerCase().split('.')[0].replace('problem', ''), 10))
      .sort((a, b) => a - b);

      console.log('problems available:', problems.join(', '));
  });
}

if (arg === 'ls' || arg === 'list') {
  return logProblems();
}

if (isNaN(index)) return console.log('Next time pass the problem as first paramether of type number!');

try {
  const problem = require(`./problems/Problem${index}.js`);
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
} catch(e) {
  if (e.code === 'MODULE_NOT_FOUND') {
    console.log('there is not solution for problem', index)
 } else {
   console.log(e)
 }
}