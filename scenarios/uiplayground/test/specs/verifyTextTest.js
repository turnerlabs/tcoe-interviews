import homePage from "../pageobjects/homePage";
import verifyTextPage from "../pageobjects/verifyTextPage";

describe("Verify Text", () => {
  it("should have title- UI Test Automation Playground ", async () => {
    await homePage.open();
    await homePage.verifyPage();
  });

  it("should have links ", async () => {
    await homePage.verifyVerifyTextLink();
  });

  it("should click links ", async () => {
    await homePage.clickVerifyTextLink();
  });

  it("should match welcome username ", async () => {
    await verifyTextPage.verifyPage();
    await verifyTextPage.verifyUserName();
  });
});
