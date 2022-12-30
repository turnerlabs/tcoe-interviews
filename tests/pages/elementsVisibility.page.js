const Page = require("./page");
class ElementsVisibilityPage extends Page {
  get hideButton() {
    return $("//tbody/tr/td");
  }
  async open() {
    await super.open("visibility");
  }

  async clickUntilUnhideButton() {
    await this.hideButton.click();
    await this.hideButton.waitUntil(
      async function () {
        return (await this.getProperty("id")) === "unhideButton";
      },
      { timeoutMsg: "Unhide button was not displayed" }
    );
  }
}

module.exports = new ElementsVisibilityPage();
