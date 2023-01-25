const Page = require("./Page.js");
const Utils = require("../helpers/Utils");

class DynamicTable extends Page {
  get table() {
    return $("aria/Tasks");
  }
  
  get columnHeader() {
    return $$("span[role='columnheader']");
  }

  get cells() {
    return $$("span[role]");
  }

  get rows() {
    return $$("div[role='row'] span[role]:nth-child(1)");
  }

  get warning() {
    return $(".bg-warning");
  }

  async open() {
    return await super.open("dynamictable");
  }

  async isDynamicTableVisible() {
    return await this.table.isDisplayed();
  }

  async getColumNames() {
    return await this.columnHeader.map((element) => element.getText());
  }

  async getRowsText() {
    return await this.rows.map((element) => element.getText());
  }

  async getWarningColor() {
    return (await this.warning.getCSSProperty("background-color")).parsed.hex;
  }
  async getAllCellsText() {
    let cellsContent = await this.cells.map((element) => element.getText());
    return cellsContent;
  }

  async getCpuData() {
    let cells = await this.cells.map((element) => element.getText());
    let PATTERN = /\d+%/,
    cellsFiltered = cells.filter(function (str) {
        return PATTERN.test(str);
      });
    return cellsFiltered;
  }
  async getMemoryData() {
    let cells = await this.cells.map((element) => element.getText());
    let PATTERN = /(\d\sMB(?!\/s))/,
      filtered = cells.filter(function (str) {
        return PATTERN.test(str);
      });
    return filtered;     
  }

  async getNetworkData() {
    let cells = await this.cells.map((element) => element.getText());
    let PATTERN = /Mbps/,
      filteredCells = cells.filter(function (str) {
        return PATTERN.test(str);
      });
    return filteredCells;
  }
  async getDiskData() {
    const cells = await this.cells.map((element) => element.getText());
    let PATTERN = /(\d\sMB\/s)/,
    ///(\d\sMB(?!\/s))/,
      filtered = cells.filter(function (str) {
        return PATTERN.test(str);
      });
    return filtered;
  }
}

module.exports = new DynamicTable();
