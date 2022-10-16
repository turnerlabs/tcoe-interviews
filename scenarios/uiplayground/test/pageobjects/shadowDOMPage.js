import { expect } from "chai";
import BasePage from "./basePage";

class ShadowDOMPage extends BasePage {
  TITLE = "Shadow DOM";
  URL = "/shadowdom";

  async verifyPage() {
    this.verifyTitle(this.TITLE);
    this.verifyURL(this.URL);
  }

  get inputField() {
    return $("//guid-generator").shadow$("//input[@id='editField']");
  }

  get buttonGenerator() {
    return $("//guid-generator").shadow$("//button[@id='buttonGenerate']");
  }

  get buttonCopy() {
    return $("//guid-generator").shadow$("//button[@id='buttonCopy']");
  }

  async clickOnGenerateAndCopy() {
    const buttonGeneratorEle = await this.buttonGenerator;
    await buttonGeneratorEle.click();
    const buttonCopyEle = await this.buttonCopy;
    await buttonCopyEle.click();
  }

  async verifyClipboardAndTextValue() {
    const inputEle = await this.inputField;
    const text = await inputEle.getValue();
    await inputEle.clearValue();
    await inputEle.click();
    await browser.keys(["Control", "v"]);
    const clipboardValue = await inputEle.getValue();
    await expect(text).to.equal(clipboardValue)
  }
}

export default new ShadowDOMPage();
