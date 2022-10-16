import dynamicID from "../pageobjects/dynamicIDPage";
import homePage from "../pageobjects/homePage";

describe("UI Test Automation Playground", () => {
  it("should have title- UI Test Automation Playground ", async () => {
    await homePage.open();
    await homePage.verifyPage();
  });

  it("should have links ", async () => {
    await homePage.verifyDynamicIDLink();
  });

  it("should click links ", async () => {
    await homePage.clickDynamicIDLink();
  });

  it("should have dynamic id button ", async () => {
    await dynamicID.verifyPage();
    await dynamicID.verifyAndClickDynamicIDBUtton();
  });
});
