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
      let maxDepth = 1; // начальная глубина

      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          const depth = this.calculateDepth(arr[i]) + 1; //рекурсивный вызов для вложенного массива
          maxDepth = Math.max(maxDepth, depth); // обновляем значения максимальной глубины
        }
      }
      return maxDepth;
    }
}

module.exports = {
  DepthCalculator
};
