const genericStringData = require("./genericStringData.json");

class GenericStringDataProvider { 
  /**
   * Get the required string data
   * @param {String} dataCriteria 
   * @returns the filtered value
   */
  getDataCriteria(dataCriteria) {
    let stringData = genericStringData.filter(value => value.testCriteria == dataCriteria)[0];
    let index = Math.floor(Math.random() * (0, stringData.values.length - 1));
    return stringData.values[index].value;
  }
}

module.exports = new GenericStringDataProvider();