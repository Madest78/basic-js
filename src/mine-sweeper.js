const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length; //высота матрицы
  const cols = matrix[0].length;//ширина матрицы
  const result = [];

  for (let i = 0; i < rows; i++) { //создаем матриуц с нулями
    result.push(new Array(cols).fill(0));
  }

  const hasMine = (row,col) => {
    return (row >= 0 && row < rows && col >= 0 && col < cols && matrix[row][col]);
  };

  for (let i = 0; i < rows; i++) { // перебираем ячейки матрицы
    for (let j = 0; j < cols; j++) {
      if (!matrix[i][j]) { //если текущая ячейка не содержит мину
        for (let r = -1; r <= 1; r++) {
          for (let c = -1; c <= 1; c++) {
            if (r !== 0 || c !== 0) {// исключаем текущую ячейку
              if (hasMine(i + r, j + c)) {
                result[i][j]++; //если соседняя ячейка содержит мину - увеличиваем счетчик.
              }
            }
          }
        }
      } else {
        result[i][j] = 1; //если есть мина устанавливаем 1
      }
    }
    return result;
  }
}

module.exports = {
  minesweeper
};
