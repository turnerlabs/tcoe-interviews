const Page = require("./page");
const GenericStringDataProvider = require("../../fixtures/stringData/genericStringDataProvider");

class TextInput extends Page {

	TITLE = "Text Input";

  get inputButtonName() {
    return $("#newButtonName");
  }

  get buttonName() {
    return $("#updatingButton");
  }

	async openPage(pageUrl) {
		return super.openPage(pageUrl)
	}

	async verifyPage(pageUrl) {
		await super.verifyPageUrl(pageUrl);
		await super.verifyPageTittle(this.TITLE);
	}

  /**
   * Set a new button name
   * @param {String} value to set
   */
  async setButtonName(value) {
    let valueToSet = GenericStringDataProvider.getDataCriteria(value);
    await this.inputButtonName.setValue(valueToSet);
    await this.buttonName.click();
    await expect(this.buttonName).toHaveText(valueToSet);
  }

}

module.exports = new TextInput();