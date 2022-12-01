const NavigatePage = require("../pageobjects/NavigateUrl");
const DynamicTable = require("../pageobjects/DynamicTable");

describe("UI Challenge 3", () => {
  it("should navigate the url: http://uitestingplayground.com/dynamictable", async () => {
    await NavigatePage.open();
    await NavigatePage.assertUrl();
  });

  it("should validate that table is visible", async () => {
    await DynamicTable.waitForTableToBeDisplayed();
    await DynamicTable.assertTableIsVisible();
  });

  it("should validate table has following columns: Name, Netword, CPU, Disk and Memory", async () => {
    await DynamicTable.waitForTableToBeDisplayed();
    await DynamicTable.assertTableHasCertainColumns();
  });

  it("should validate table has following rows: Internet Explorer, System, Chrome, Firefox", async () => {
    await DynamicTable.waitForTableToBeDisplayed();
    await DynamicTable.fillRowArr();
    await DynamicTable.assertTableHasCertainRows();
  });

  it("should validate color of warning label", async () => {
    await DynamicTable.waitForTableToBeDisplayed();
    await DynamicTable.assertWarningLabelColor();
  });

  it("should validate values change upon refresh", async () => {
    await DynamicTable.waitForTableToBeDisplayed();
    await DynamicTable.setPreviousValue();
    await DynamicTable.refreshBrowser();
    await DynamicTable.assertValuesChanged();
  });

  it("should validate CPU data", async () => {
    await DynamicTable.waitForTableToBeDisplayed();
    await DynamicTable.assertCpuData("CPU");
  });

  it("should validate Memory data", async () => {
    await DynamicTable.waitForTableToBeDisplayed();
    await DynamicTable.assertCpuData("Memory");
  });

  it("should validate Network data", async () => {
    await DynamicTable.waitForTableToBeDisplayed();
    await DynamicTable.assertCpuData("Network");
  });

  it("should validate Disk data", async () => {
    await DynamicTable.waitForTableToBeDisplayed();
    await DynamicTable.assertCpuData("Disk");
  });
});
