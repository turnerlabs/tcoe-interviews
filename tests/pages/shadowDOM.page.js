const Page = require("./page");
class ShadowDOMPage extends Page {
  get editField() {
    return $("guid-generator").shadow$("#editField");
  }
  get buttonGenerate() {
    return $("guid-generator").shadow$("#buttonGenerate");
  }
  get buttonCopy() {
    return $("guid-generator").shadow$("#buttonCopy");
  }

  async open() {
    await super.open("shadowdom");
  }

  async generateGUID() {
    await this.buttonGenerate.click();

    await this.editField.waitUntil(async function () {
      return ((await this.getValue().length) !== 0) === true;
    });
    return (await this.editField).getValue();
  }

  async copyGUID() {
    await this.buttonCopy.click();
  }

  async pasteGUIDInField() {
    await this.editField.clearValue();
    await this.editField.waitUntil(async function () {
      return (await this.getText()) === "";
    });
    await this.editField.click();
    await browser.keys(["Control", "v"]);
  }
}

module.exports = new ShadowDOMPage();
