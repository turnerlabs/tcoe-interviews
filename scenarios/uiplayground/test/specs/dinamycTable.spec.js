const homePage = require("../pageobjects/HomePage.js");
//const chai = require("chai");
const data = require("../helpers/data.js");
const dynamicTable = require("../pageobjects/DynamicTable.js")


describe("Testing the Dynamic table in the page", () => {
 
  beforeEach(async () => {
    homePage.open();
  });

  it("The table should be visible", async () => {
    await homePage.goToDynamicTable();
    expect(await dynamicTable.isDynamicTableVisible());
  });
  it("The table should have the following columns: Name, Network, Disk , CPU, Memory", async () => {
    await homePage.goToDynamicTable();
    expect(await dynamicTable.getColumNames()).to.have.members(
      data.columHeaders
    );
  });

  it("Table should have the following rows: Internet Explorer, System, Chrome, Firefox", async () => {
    await homePage.goToDynamicTable();
    expect(await dynamicTable.getRowsText()).to.include.members(
      data.processName
    );
  });

  it("Validate color of warning label", async () => {
    await homePage.goToDynamicTable();

    expect(await dynamicTable.getWarningColor()).to.include(data.warningColor);
  });
  it("Validate values change upon refresh", async () => {
    await homePage.goToDynamicTable();
    let firstTable = await dynamicTable.getAllCellsText();
    await browser.refresh();
    let tableAfterRefresh = await dynamicTable.getAllCellsText();
    expect(firstTable).to.not.equal(tableAfterRefresh);
  });

  it("Validate CPU data", async () => {
    await homePage.goToDynamicTable();
    expect((await dynamicTable.getCpuData()).length).to.equal(4);
  });
  it("Validate the Memory data", async () => {
    await homePage.goToDynamicTable();
    expect((await dynamicTable.getMemoryData()).length).to.equal(4);
  });

  it("Validate the Network data", async () => {
    await homePage.goToDynamicTable();

    expect((await dynamicTable.getNetworkData()).length).to.equal(4);
  });
  it("Validate the Disk data", async () => {
    await homePage.goToDynamicTable();
    expect((await dynamicTable.getDiskData()).length).to.equal(4);
  });
});
