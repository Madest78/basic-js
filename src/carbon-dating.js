const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||//проверяем является ли аргумент числом в нужном диапазоне
    isNaN(parseFloat(sampleActivity)) || 
    parseFloat(sampleActivity) <= 0 ||
    parseFloat(sampleActivity) > MODERN_ACTIVITY
  ) {
    return false;
  }
//используем формулу вычисления полураспада радиоактивных веществ найденную в гугле естественно)
  const k = 0.693 / HALF_LIFE_PERIOD;   // округляем примерный log2 (~0693147)
  const t = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
  return Math.ceil(t)
}

module.exports = {
  dateSample
};
