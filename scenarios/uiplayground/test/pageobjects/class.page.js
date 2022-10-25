const Page = require("./page");

class ClassPage extends Page {

	TITLE = "Class Attribute";

  get primaryButton() {
    return $(".btn-primary");
  }

  get warningButton() {
    return $(".btn-warning");
  }

  get succesButton() {
    return $(".btn-success");
  }

	async openPage(pageUrl) {
		return super.openPage(pageUrl)
	}

	async verifyPage(pageUrl) {
		await super.verifyPageUrl(pageUrl);
		await super.verifyPageTittle(this.TITLE);
	}

  /**
   * Clicks on primary button
   */
  async clickOnPrimaryButton() {
    await this.primaryButton.click();
    await browser.acceptAlert();
  }
}

module.exports = new ClassPage();
