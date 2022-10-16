import homePage from "../pageobjects/homePage";
import mouseOverPage from "../pageobjects/mouseOverPage";

describe("Mouse Over", () => {
  it("should have title- UI Test Automation Playground ", async () => {
    await homePage.open();
    await homePage.verifyPage();
  });

  it("should have links ", async () => {
    await homePage.verifyMouseOverLink();
  });

  it("should click links ", async () => {
    await homePage.clickMouseOverLink();
  });

  it("mouse over should perform", async () => {
    await mouseOverPage.verifyPage();
    await mouseOverPage.verifyClassAndCount();
    await mouseOverPage.overAndVerifyClassAndCount();
  });
});
