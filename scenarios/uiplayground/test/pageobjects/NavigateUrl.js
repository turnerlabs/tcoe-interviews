const Page = require("./page");

class LoginPage extends Page {
  open() {
    return super.open("");
  }

  async assertUrl() {
    const url = await browser.getUrl();
    const expectedUrl = "http://uitestingplayground.com/dynamictable/";

    await expect(url).toEqual(expectedUrl);
  }
}

module.exports = new LoginPage();
