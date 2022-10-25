const Page = require("./page");
const Header = require("./header.page");

class Home extends Page {

	TITLE = "UI Test Automation Playground";

  get pageContainer() {
    return $("#description");
  }

	async openPage(pageUrl) {
		return super.openPage(pageUrl)
	}

	async verifyPage(pageUrl) {
		await super.verifyPageUrl(pageUrl);
		await super.verifyPageTittle(this.TITLE);
	}

  async homePageIsCorrectlyDisplayed() {
    await Header.isCorrectlyDisplayed();
    await this.pageContainer().toBeExisting();
  }
}

module.exports = new Home();
