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
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const mainString = [];

  for (let i = 0; i < repeatTimes; i++) {
    let tempStr = str === null ? 'null' : String(str);
    let additionStr = '';

    if (addition !== undefined) {
      additionStr = addition === null ? 'null' : String(addition);
      additionStr = Array(additionRepeatTimes).fill(additionStr).join(additionSeparator);
    }

    tempStr += additionStr;
    mainString.push(tempStr);
  }

  return mainString.join(separator);
}

module.exports = {
  repeater
};
