import BasePage from "./basePage";
import { expect } from "chai";

class DynamicTablePage extends BasePage {
  TITLE = "Dynamic Table";
  URL = "/dynamictable";

  get tableHeaders() {
    return $$("//*[@role='table']//*[@role='columnheader']");
  }
  get tableNameColumnData() {
    return $$("//div[@role='table']//span[@role='cell'][1]");
  }
  get chromePercentage() {
    return $("//p[@class='bg-warning']");
  }
  getCell(row, column) {
    return $(
      `//*[@role='table']//*[@role='cell']/../../div[${row}]/span[${column}]`
    );
  }

  async verfiyPage() {
    await super.verifyURL(this.URL)
    await super.verifyTitle(this.TITLE);
  }

  async getCPUHeaderIndex(headers) {
    return await this.findeIndex(headers, "CPU");
  }

  async findeIndex(headers, columnText) {
    let index = null;
    for (let i = 0; i < headers.length; i++) {
      const text = await headers[i].getText();
      if (text == columnText) {
        return i + 1;
      }
    }
    return index;
  }

  async getChromeRowIndex() {
    const nameColumn = await this.tableNameColumnData;
    return await this.findeIndex(nameColumn, "Chrome");
  }

  async getTableCellText(rowIndex, columnIndex) {
    const cell = await this.getCell(rowIndex, columnIndex);
    const text = await cell.getText();
    await expect(text).not.to.be.null;
    return text.trim();
  }

  async verifyChromePercentage() {
    const headers = await this.tableHeaders;
    const cpuColumnIndex = await this.getCPUHeaderIndex(headers);
    await expect(cpuColumnIndex).not.to.be.null;
    const chromeRowIndex = await this.getChromeRowIndex();
    await expect(chromeRowIndex).not.to.be.null;
    const chromeCPUCellText = await this.getTableCellText(
      chromeRowIndex,
      cpuColumnIndex
    );
    const chromePercentageText = await this.getChromePercentageText();
    await expect(chromeCPUCellText).to.equal(chromePercentageText);
  }

  async getChromePercentageText() {
    const percentage = await this.chromePercentage;
    const text = await percentage.getText();
    await expect(text).not.to.be.null;
    return text.split(":")[1].trim();
  }
}

export default new DynamicTablePage();
