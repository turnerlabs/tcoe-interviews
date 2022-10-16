// login.spec.js
import HomePage from "../pageobjects/homePage";
import LINKS from "../pageobjects/homePageLinkEnum";
import dynamicTablePage from "../pageobjects/dynamicTablePage";

describe("Dynamic Table Test", () => {
  it("Nivigate to UI Testing Playground", async () => {
    var url = "http://uitestingplayground.com/";
    await HomePage.open(url);
    var title = "UI Test Automation Playground";
    await expect(browser).toHaveTitle(title);
  });

  it("scroll to Dynamic Table Link", async () => {
    var ele = await HomePage.getLink(LINKS.DYNAMIC_TABLE);
    await ele.scrollIntoView();
    await expect(ele).toBeDisplayed();
  });

  it("click on Dynamic Table Link", async () => {
    var ele = await HomePage.getLink(LINKS.DYNAMIC_TABLE);
    await ele.click();
  });

  it("Verify Chrome CPU Percentage", async () => {
    await dynamicTablePage.verfiyPage();
    await dynamicTablePage.verifyChromePercentage();
  });
});
