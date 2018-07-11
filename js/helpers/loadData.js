const fs = require('fs');
const PATH = './problems/data/';

const loadData = (filename, removeCarriageReturn = true) => {
  const file = PATH + filename + '.txt';

  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) return reject(err);

      data = removeCarriageReturn ? data.replace(/\r/g, '') : data;
      resolve(data);
    });
  });
};

module.exports = loadData;
