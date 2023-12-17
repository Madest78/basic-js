const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('').map(Number);
  const deletedNumbers = [];

  for (let i = 0; i < digits.length; i++) {
    const tempDigits = digits.slice();
    if (tempDigits[i] = 0) {
      tempDigits.splice(i, 1);
    } else {
    tempDigits.splice(i, 1);
    }

    const tempNumber = parseInt(tempDigits.join(''));
    deletedNumbers.push(tempNumber);
  }
    const maxNumber = deletedNumbers.sort((a, b) => b - a)[0];
    return maxNumber;
}

module.exports = {
  deleteDigit
}
