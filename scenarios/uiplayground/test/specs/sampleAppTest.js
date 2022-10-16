//Negative SCenerio

import homePage from "../pageobjects/homePage";
import sampleAppPage from "../pageobjects/sampleAppPage";

const USER_NAME = "Test";
const INVALID_PASSWORD = "Test";
const VALID_PASSWORD = "pwd";

describe("Sample App", () => {
  it("should have title- UI Test Automation Playground ", async () => {
    await homePage.open();
    await homePage.verifyPage();
  });

  it("should have links ", async () => {
    await homePage.verifySampleAppLink();
  });

  it("should click links ", async () => {
    await homePage.clickSampleAppLink();
  });

  it("should have dynamic id button ", async () => {
    await sampleAppPage.verifyPage();
    await sampleAppPage.enterUserNameAndPassword(USER_NAME, INVALID_PASSWORD);
    await sampleAppPage.verifyInvalidLogin();
    await sampleAppPage.enterUserNameAndPassword(USER_NAME, VALID_PASSWORD);
    await sampleAppPage.verifyValidLogin();
  });
});
