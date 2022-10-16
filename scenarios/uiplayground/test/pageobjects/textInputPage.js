import { expect } from "chai";
import BasePage from "./basePage";

class TextInputPage extends BasePage {
  TITLE = "Text Input";
  URL = "/textinput";

  async verifyPage() {
    this.verifyTitle(this.TITLE);
    this.verifyURL(this.URL);
  }

  get textInput() {
    return $("//input[@id='newButtonName']");
  }

  get button() {
    return $("//button[@id='updatingButton']");
  }

  async enterButtonNameAndClick(name) {
    const textInputEle = await this.textInput;
    await textInputEle.clearValue();
    await textInputEle.setValue(name);
    const buttonEle = await this.button;
    await buttonEle.click();
  }

  async verifyButtonName(name) {
    const ele = await this.button;
    const text = await ele.getText();
    expect(text).to.equal(name);
  }
}

export default new TextInputPage();
