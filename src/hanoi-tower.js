const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {// решаем по формуле 2 n − 1 
  const totalTurns = Math.pow(2, disksNumber) - 1 //общее колличество перекладываний
  const seconds = totalTurns / (turnsSpeed / 3600); //время в секундах

  return {
    turns: totalTurns,
    seconds: Math.floor(seconds),
  };
}

module.exports = {
  calculateHanoi
};
