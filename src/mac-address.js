const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {
  const arr = str.split('-');
  const symbols = '0123456789ABCDEF';
  let result = arr.length === 6 && arr.every(segment => segment.length === 2 && segment.split('').every(char => symbols.includes(char)));
  return result;
}

module.exports = {
  isMAC48Address
};
