const Page = require("./page");

class DynamicTable extends Page {
  get rowArr() {
    return [];
  }

  get previousLabelValue() {
    return [];
  }

  get certainColumnsArr() {
    return [];
  }

  set previousLabelValue(value) {
    return (this.setPreviousValue = value);
  }

  get table() {
    return $('div[role="table"]');
  }

  get columns() {
    return $$('span[role="columnheader"]');
  }

  get allRows() {
    return $$('div[role="row"]');
  }

  get warningLabel() {
    return $(".bg-warning");
  }

  async waitForTableToBeDisplayed() {
    await this.table.waitForDisplayed();
  }

  async assertTableIsVisible() {
    await expect(this.table).toBeDisplayed();
  }

  async assertTableHasCertainColumns() {
    const expectedColumns = ["Name", "Network", "CPU", "Memory", "Disk"];

    this.columns.forEach(async (column) => {
      let columnName = await column.getText();
      let existingValue = expectedColumns.includes(columnName);

      await expect(existingValue).toEqual(true);
    });
  }

  async fillRowArr() {
    this.allRows.forEach(async (row, index) => {
      if (index > 0) {
        await row.shadow$$('span[role="cell"]').forEach(async (row, idx) => {
          if (idx === 0) {
            let r = await row.getText();
            this.rowArr.push(r);
          }
        });
      }
    });
  }

  async assertTableHasCertainRows() {
    const expectedRows = ["Internet Explorer", "System", "Chrome", "Firefox"];
    this.rowArr.forEach(async (row) => {
      let existingValue = expectedRows.includes(row);

      await expect(existingValue).toEqual(true);
    });
  }

  async assertWarningLabelColor() {
    const color = await this.warningLabel.getCSSProperty("color");
    const hexaColor = color.parsed.hex;

    await expect(hexaColor).toEqual("#212529");
  }

  async setPreviousValue() {
    this.previousLabelValue.push(await this.warningLabel.getText());
  }

  async refreshBrowser() {
    await browser.refresh();
  }

  async assertValuesChanged() {
    const currentLabelValue = await this.warningLabel.getText();

    await expect(this.previousLabelValue[0]).not.toEqual(currentLabelValue);
  }

  async getCellValue(colName) {
    return new Promise((resolve, reject) => {
      this.columns.forEach(async (column, index) => {
        let columnName = await column.getText();
        if (index > 0 && colName === columnName) {
          this.allRows.forEach(async (row) => {
            await row
              .shadow$$('span[role="cell"]')
              .forEach(async (cell, idx) => {
                if (idx === index) {
                  let cellValue = await cell.getText();

                  resolve(cellValue);
                } else {
                  reject(0);
                }
              });
          });
        }
      });
    });
  }

  async assertCpuData(column) {
    const data = await this.getCellValue(column);
    await expect(data).toHaveTextContaining("%");
  }

  async assertNetworkData(column) {
    const data = await this.getCellValue(column);
    await expect(data).toHaveTextContaining("Mbps");
  }

  async assertDiskData(column) {
    const data = await this.getCellValue(column);
    await expect(data).toHaveTextContaining("Mb/s");
  }

  async assertMemoryData(column) {
    const data = await this.getCellValue(column);
    await expect(data).toHaveTextContaining("MB");
  }
}

module.exports = new DynamicTable();
