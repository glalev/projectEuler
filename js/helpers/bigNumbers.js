/*
relative simple helpers functions of mine
for basic arithmetic actions on big numbers represented as strings
*/

const ERRORS = {
  NOT_A_STRING: 'All operations require numbres to be represented as strings',
  NOT_A_NUMBER: 'Please provide a prober number'
};

const _compare = (n1, n2) => {
  if (!_isNumber(n1) || !_isNumber(n2)) return console.error(ERRORS.NOT_A_NUMBER);
  if (n1 === n2) return 'EQ';
  if (n1.length === n2.length) return n1 > n2 ? 'GT' : 'LT';

  return n1.length > n2.length ? 'GT' : 'LT';
};

const _negate = (n) => {
  return _isNegative(n) ? n.slice(1) : '-' + n;
};

const _isNumber = (n) => {
  if (typeof n !== 'string') return console.error(ERRORS.NOT_A_STRING);

  const regEx = /^-?\d*\.?\d{0,6}$/;
  return n !== '' && n.match(regEx) !== null;
};

const _isNegative = (n) => n[0] === '-';
const _abs = (n) => _isNegative(n) ? n.slice(1) : n;

const _pow10 = (n) => {
  let result = '1';
  while (n-- > 0) {
    result += '0';
  }

  return result;
};

const _trim = (n) => {
  if (!n.startsWith('0') || n.length === 1) return n;

  return n.replace(/\b0+/g, '') || '0';
};

// multiples two number one of which is one digit long, using good old simple multiplication from school
const _singleMultiplication = (a, b) => {
  if (a === '0' || b === '0') return '0';
  if (a === '1') return b;
  if (b === '1') return a;
  if (b.length > a.length) return _singleMultiplication(b, a);

  let reminder = 0;
  let result = '';
  let base = parseInt(b, 10);

  for (let i = a.length - 1; i >= 0; i--) {
    let mult = base * parseInt(a[i], 10);
    let fullSum = mult + reminder;
    let modSum = fullSum % 10;

    reminder = (fullSum - modSum) / 10;
    result = modSum + result;
  }

  return _trim(reminder + result);
};

const plus = (...ns) => {
  ns = ns.sort((a, b) => b.length - a.length);
  let reminder = 0;
  let result = '';
  let longest = ns[0].length;

  for (let i = longest - 1; i >= 0; i--) {
    let sum = ns.reduce((acc, a) => {
      let j = i - (longest - a.length);
      return acc + (parseInt(a[j], 10) || 0);
    }, 0);
    let fullSum = sum + reminder;
    let modSum = fullSum % 10;

    result = i === 0 ? fullSum + result : modSum + result;
    reminder = (fullSum - modSum) / 10;
  }

  return result;
};

const minus = (a, b) => {
  if (a === b) return '0';
  if (_isNegative(a) && _isNegative(b)) return minus(_abs(b), _abs(a));
  if (_isNegative(a)) return _negate(plus(_abs(a), b));
  if (_isNegative(b)) return plus(a, _abs(b));
  if (_compare(a, b) === 'LT') return _negate(minus(b, a));

  let borrow = 0;
  let result = '';
  let dlength = a.length - b.length;
  for (let i = a.length - 1; i >= 0; i--) {
    let j = i - dlength;
    let n1 = parseInt(a[i]);
    let n2 = parseInt(b[j]) || 0;
    let sum;
    if (n1 - borrow >= n2) {
      sum = n1 - n2 - borrow;
      borrow = 0;
    } else {
      sum = (n1 + 10 - borrow) - n2;
      borrow = 1;
    }

    result = (i === 0 && sum === 0) ? result : sum + result;
  }

  return result;
};

// multiplication using karatsuba algorithm
const mult = (x, y) => {
  if (x.length === 1 || y.length === 1) return _singleMultiplication(x, y);
  const m = Math.floor(Math.max(x.length, y.length) / 2);
  const b = _pow10(m);
  const x0 = x.length > m ? _trim(x.slice(-m)) : x;
  const x1 = x.length > m ? _trim(x.slice(0, x.length - m)) : '0';
  const y0 = y.length > m ? _trim(y.slice(-m)) : y;
  const y1 = y.length > m ? _trim(y.slice(0, y.length - m)) : '0';

  const z0 = mult(x0, y0);
  const z2 = mult(x1, y1);
  // todo change minus to take multiple paramethers
  const z1 = minus(minus(mult(plus(x1, x0), plus(y1, y0)), z2), z0);

  return plus((z2 + '0'.repeat(2 * m)), (z1 + '0'.repeat(m)), z0);
};

module.exports = { plus, minus, mult };
