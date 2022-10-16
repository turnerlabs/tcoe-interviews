import ajaxDataPage from "../pageobjects/ajaxDataPage";
import homePage from "../pageobjects/homePage";

describe("AJAX Data", () => {
  it("should have title- UI Test Automation Playground ", async () => {
    await homePage.open();
    await homePage.verifyPage();
  });

  it("should have links ", async () => {
    await homePage.verifyAJAXDataLink();
  });

  it("should click links ", async () => {
    await homePage.clickAJAXDataLink();
  });

  it("should display the response text", async () => {
    await ajaxDataPage.verifyPage()
    await ajaxDataPage.clickAndwaitForTextToVisible();
    await ajaxDataPage.verifyReponseText();
  });
});
