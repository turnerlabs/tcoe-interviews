const Page = require("./page");
class MouseClickPage extends Page {
  get button() {
    return $("#badButton");
  }
  async open() {
    await super.open("click");
  }

  async clickButton() {
    await this.button.click();
  }

  async getButtonColor() {
    return await this.button.getCSSProperty("color");
  }
}

module.exports = new MouseClickPage();
