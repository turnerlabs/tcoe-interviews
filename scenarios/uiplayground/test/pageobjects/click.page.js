const Page = require("./page");

class Click extends Page {

	TITLE = "Click";

  get badButton() {
    return $("#badButton");
  }

	async openPage(pageUrl) {
		return super.openPage(pageUrl)
	}

	async verifyPage(pageUrl) {
		await super.verifyPageUrl(pageUrl);
		await super.verifyPageTittle(this.TITLE);
	}

  /**
   * Clicks on bad button
   */
  async clickOnButton() {
    await expect(this.badButton).toExist();
    await this.badButton.click();
  }

  /**
   * Verify that the bad button was pressed
   */
  async verifyBadButtonPressed() {
    await expect(this.badButton).toHaveAttrContaining('class', 'btn-success') 
  }
}

module.exports = new Click();