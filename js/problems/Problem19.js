/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

Answer: 171
*/

//              1   2   3   4   5   6   7   8   9   10  11  12
const YEARS = 101;
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const isLeap = (year) => {
  if (year % 4 !== 0) return false;

  return !(year % 100 === 0 && year % 400 !== 0);
};
const years = Array(YEARS)
  .fill(months)
  // handling leap years
  .map((month, i) => {
    month[1] = isLeap(1900 + i) ? 29 : 28;

    return month.slice(); // copying the array, otherwise there will be just several reference to a single array
  })
  .reduce((arr, month) => arr.concat(...month), [])
  // marking each month's first day count - 01.01.1900 is day 1, 01.02.1900 is day 32, 01.03.1900 is day 60, etc.
  .reduce((arr, days, i) => arr.concat(arr[i] + days), [1])
  .slice(12, YEARS * 12) // removing 1990 and 01.01.2001
  .map((day) => day % 7 === 0 ? 1 : 0) // each Sunday is marked as 1
  .reduce((sum, a) => sum + a, 0);

module.exports = () => years;
