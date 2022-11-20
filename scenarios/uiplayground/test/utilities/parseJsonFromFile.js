const fs = require("fs");

/**
 * method to convert json file into JS array or object
 * @param filePath file path of json file
 * @returns parsed data
 */
const parseJsontestData = (filePath) => {
  json = fs.readFileSync(filePath);
  return JSON.parse(json);
};

exports.parseJsontestData = parseJsontestData;
