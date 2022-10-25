const Page = require("./page");

class DynamicId extends Page {

	TITLE = "Dynamic ID";

  get dynamicIdButton() {
    return $("//button[contains(text(),'Dynamic')]");
  }

	async openPage(pageUrl) {
		return super.openPage(pageUrl)
	}

	async verifyPage(pageUrl) {
		await super.verifyPageUrl(pageUrl);
		await super.verifyPageTittle(this.TITLE);
	}

  /**
   * Clicks on dynamic id button
   */
  async clickOnDynamicIdButton() {
    await this.dynamicIdButton.click();
  }
}

module.exports = new DynamicId();