import dynamicID from "../pageobjects/dynamicIDPage";
import homePage from "../pageobjects/homePage";
import shadowDOMPage from "../pageobjects/shadowDOMPage";

describe("Shadow DOM", () => {
  it("should have title- UI Test Automation Playground ", async () => {
    await homePage.open();
    await homePage.verifyPage();
  });

  it("should have links ", async () => {
    await homePage.verifyShadowDOMLink();
  });

  it("should click links ", async () => {
    await homePage.clickShadowDOMLink();
  });

  it("verify textbox text match clipboard", async () => {
    await shadowDOMPage.verifyPage();
    await shadowDOMPage.clickOnGenerateAndCopy();
    await shadowDOMPage.verifyClipboardAndTextValue();
  });
});
