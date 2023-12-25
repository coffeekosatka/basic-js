const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let depth = 1;
    let maxDepth = 1;

    for (let i = 0; i < arr.length; i++) {
      depth += i;
    }
    const result = Array.from({ length: depth * 2 }, (_, index) => String.fromCharCode(index + 65)).join(""); //не уверена, удалить

    for (const element of arr) {
      if (Array.isArray(element)) {
        const depth = this.calculateDepth(element) + 1;
        maxDepth = Math.max(maxDepth, depth);
      }
    }


    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
