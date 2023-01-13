const DynamicTablePage = require("../pageobjects/dynamicTable.page");

let dynamicTableColumns = ["Name", "Network", "CPU", "Disk", "Memory"];
let dynamicTableRowsFirstCell = [
  "Internet Explorer",
  "System",
  "Chrome",
  "Firefox",
];

describe("Feature: Dynamic Table Validations", () => {
  describe("Scenario:Validate Dynamic Table UI And Data", () => {
    describe('Given:User wants to access the "Validate the Dynamic table"', () => {
      before(async () => {
        await DynamicTablePage.open();
        browser.waitUntil(async () => {
          return await DynamicTablePage.isDynamicTableDisplayed();
        });
      });

      context(
        "When: User lanuches the browser with dynamic tbale URL",
        async () => {
          it("Then:should navigate to dynamic table page and validate that table is visible ", async () => {
            const isDynamicTableDisplayed = await browser.waitUntil(
              async () => {
                return await DynamicTablePage.isDynamicTableDisplayed();
              }
            );
            await expect(isDynamicTableDisplayed).toBe(true);
          });

          it("Then:should validate the table should have the expected columns ", async () => {
            dynamicTableColumns.forEach(async (columnValue) => {
              await expect(
                await DynamicTablePage.validateDynamicTableCoulumnsHeaders(
                  columnValue
                )
              ).toBe(true);
            });
          });

          it("Then:should validate the table should have the expected rows ", async () => {
            dynamicTableRowsFirstCell.forEach(async (cellValue) => {
              await expect(
                await DynamicTablePage.validateDynamicTableRowsFristCellValue(
                  cellValue
                )
              ).toBe(true);
            });
          });

          it("Then:Should validate color of warning label", async () => {
            expect(await DynamicTablePage.getWarningLableColorValue()).toEqual(
              "rgba(255,193,7,1)"
            );
          });

          it("Then:Should Validate values change upon refresh", async () => {
            var beforeRefresh =
              await DynamicTablePage.getFirstCellValueFromTableRows();
            await browser.refresh();
            browser.waitUntil(async () => {
              return await DynamicTablePage.isDynamicTableDisplayed();
            });
            var afterRefresh =
              await DynamicTablePage.getFirstCellValueFromTableRows();
            expect(beforeRefresh === afterRefresh).toBe(false);
          });

          it("Then:Should Validate Network data", async () => {
            var isDataPresent =
              await DynamicTablePage.validateColumnDataByColumnName(
                dynamicTableColumns[1]
              );
            expect(isDataPresent).toBe(true);
          });

          it("Then:Should Validate CPU data", async () => {
            var isDataPresent =
              await DynamicTablePage.validateColumnDataByColumnName(
                dynamicTableColumns[2]
              );
            expect(isDataPresent).toBe(true);
          });

          it("Then:Should Validate Disk data", async () => {
            var isDataPresent =
              await DynamicTablePage.validateColumnDataByColumnName(
                dynamicTableColumns[3]
              );
            expect(isDataPresent).toBe(true);
          });

          it("Then:Should Validate Memory data", async () => {
            var isDataPresent =
              await DynamicTablePage.validateColumnDataByColumnName(
                dynamicTableColumns[4]
              );
            expect(isDataPresent).toBe(true);
          });
        }
      );
    });
  });
});
