const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str === null) str = 'null';
  if (str === undefined) str = '';

  let repeatTimes = options && options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let separator = options && options.separator !== undefined ? String(options.separator) : '+';

  let addition = options && options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = options && options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let additionSeparator = options && options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += String(str);

    if (additionRepeatTimes > 0) {
      result += Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    }

    if (i < repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}


module.exports = {
  repeater
};
