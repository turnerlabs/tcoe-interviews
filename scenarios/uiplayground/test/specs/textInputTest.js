import homePage from "../pageobjects/homePage";
import textInputPage from "../pageobjects/textInputPage";

const BUTTON_NAME = "Test";

describe("Text Input", () => {
  it("should have title- UI Test Automation Playground ", async () => {
    await homePage.open();
    await homePage.verifyPage();
  });

  it("should have links ", async () => {
    await homePage.verifyTextInputLink();
  });

  it("should click links ", async () => {
    await homePage.clickTextInputLink();
  });

  it("verify button name should change", async () => {
    await textInputPage.verifyPage();
    await textInputPage.enterButtonNameAndClick(BUTTON_NAME);
    await textInputPage.verifyButtonName(BUTTON_NAME);
  });
});
