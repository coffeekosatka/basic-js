const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let i = 0;

  while (i < str.length) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count += 1;
      i += 1;
    }

    if (count === 1) {
      result += str[i];
    } else {
      result += count + str[i];
    }

    i += 1;
  }

  return result;
}

module.exports = {
  encodeLine
};
