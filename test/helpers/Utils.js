/**
 * Utils class
 */
class Utils {
  getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber + 1);
  }
}

module.exports = new Utils();
