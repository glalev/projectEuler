const loadData = require("../helpers").loadData;

const getKey = ([i, j]) => `${i}-${j}`;
const getSum = (address, nodes) => {
  const [i, j] = address;
  const keyUp = getKey([i - 1, j]);
  const keyLeft = getKey([i, j - 1]);

  if (!nodes[keyUp] && !nodes[keyLeft]) return 0;
  if (!nodes[keyUp]) return nodes[keyLeft];
  if (!nodes[keyLeft]) return nodes[keyUp];

  return Math.min(nodes[keyUp], nodes[keyLeft]);
};

const buildNode = (arr, address, nodes) => {
  const [i, j] = address;
  const value = arr[i][j];
  const key = getKey(address);
  const sum = value + getSum(address, nodes);

  nodes[key] = sum;
};

const buildNodes = (arr) => {
  const nodes = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      buildNode(arr, [i, j], nodes);
    }
  }

  return nodes;
};

const problem = async () => {
  const data = await loadData("problem81");
  const rows = data.split("\n").filter((a) => !!a);
  const matrix = rows.map((row) => row.split(",").map((n) => parseInt(n)));
  const nodes = buildNodes(matrix);
  const key = getKey([matrix.length - 1, matrix[0].length - 1]);

  return nodes[key];
};

module.exports = problem;
