const HomePage = require("./../pages/home.page");

describe("Tests over home page", function () {
  it("Home page must load correctly", async function () {
    await browser.url("/");
    await expect(HomePage.mainTitle).toBeDisplayed();
    await expect(browser).toHaveUrl("http://uitestingplayground.com/");
  });
});
