// Description: This file contains the selectors and methods for the table page
const { cssProps } = require("../utils/selectors");
const Page = require("./page");

const expectedColumns = require("../utils/selectors"). expectedColumns;
const expectedRows = require("../utils/selectors").expectedRows;

class Table extends Page {
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
    return $('.bg-warning');
  }

  get rowArr() {
    return [];
  }

  get oldValues() {
    return [];
  }

  get certainColumnsArr() {
    return [];
  }

  set oldValues(value) {
    return (this.oldValues = value);
  }

  async waitForTableToDisplay() {
    await this.table.waitForDisplayed();
  }

  async isVisible() {
    await expect(this.table).toBeDisplayed();
  }

  async assertTableHasCertainColumns() {
    for (column in this.columns) {
      let columnName = await column.getText();
      let existingValue = expectedColumns.includes(columnName);

      await expect(existingValue).toEqual(true);
    }
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

  async validateTableRows() {
    for (row in this.rowArr) {
      let existingValue = expectedRows.includes(row);

      await expect(existingValue).toEqual(true);
    }
  }

  async validateWarningColor() {
    const color = await this.warningLabel.getCSSProperty('color');
    const hexaColor = color.parsed.hex;
    const expectedColor = cssProps.colors.warningLabel;

    await expect(hexaColor).toEqual(expectedColor);
  }

  async setPreviousValue() {
    this.oldValues.push(await this.warningLabel.getText());
  }

  async catchChangedValues() {
    const currentValue = await this.warningLabel.getText();

    await expect(this.oldValues[0]).not.toEqual(currentValue);
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

  async assertData(column, unit) {
    const data = await this.getCellValue(column);
    await expect(data).toHaveTextContaining(unit);
  }
}

module.exports = new Table();
