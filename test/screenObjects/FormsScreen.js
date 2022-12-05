const Utils = require("../helpers/Utils.js");

const Gestures = require("../helpers/Gestures");

class FormsScreen {
  get formsContent() {
    return $("~Forms-screen");
  }

  get inputField() {
    return $("~text-input");
  }

  get textReview() {
    return $("~input-text-result");
  }

  get picker() {
    return $("~Dropdown");
  }

  get activeButton() {
    return $("~button-Active");
  }

  get inactiveButton() {
    return $("~button-Inactive");
  }

  constructor() {
    Utils.waitForElementDisplayed(this.formsContent);
  }

   async formsContentIsDisplayed() {
    return (await this.formsContent).waitForDisplayed();

  }

  async typeInInputField(text) {
    await Utils.sendKeys(this.inputField, text);
  }
  async getInputReviewText() {
    return await this.textReview.getText();
  }

  async goToPicker() {
    await Utils.tapOn(this.picker);

  }

  async tapOnActiveButton() {
    await Gestures.swipeToElement(this.activeButton)
    await Utils.tapOn(this.activeButton);
  }

  async tapOnInactiveButton() {
    await Gestures.swipeToElement(this.inactiveButton);
    await Utils.tapOn(this.inactiveButton);

  }
async isKeyboardAvailable(){
  await Utils.tapOn(this.inputField);

}
}

module.exports = FormsScreen;
