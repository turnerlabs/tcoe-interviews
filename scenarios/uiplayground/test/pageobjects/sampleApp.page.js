const Page = require("./page");
const CredentialsProvider = require("../../fixtures/credentials/credentialsProvider");

class SampleApp extends Page {

	TITLE = "Sample App";

  get inputUsername() {
    return $("input[name='UserName']");
  }

  get inputPassword() {
    return $("input[name='Password']");
  }

  get btnSubmit() {
    return $("#login");
  }

  get loginStatus() {
		return $("#loginstatus");
	}

	async openPage(pageUrl) {
		return super.openPage(pageUrl)
	}

	async verifyPage(pageUrl) {
		await super.verifyPageUrl(pageUrl);
		await super.verifyPageTittle(this.TITLE);
	}

  /**
   * Clicks on login button to submit the form
   */
  async clickOnLoginButton() {
    await this.btnSubmit.click();
  }

  /**
   * Login to the app using credentials by type
   * @param {String} credentialsType may be valid, invalid
   */
  async loginByCredentialsType(credentialsType) {
		let credentials = CredentialsProvider.byType(credentialsType);
    await this.inputUsername.setValue(credentials.user);
    await this.inputPassword.setValue(credentials.pass);
    await this.btnSubmit.click();
  }

  /**
   * Verify the login status
   * @param {boolean} loginStatus may be true or false
   */
  async verifyLogin(loginStatus) {
   const loginMsg = (loginStatus == true) ? 'Welcome' : 'Invalid';
   expect(this.loginStatus).toBeExisting();
   expect(this.loginStatus.getText()).toHaveTextContaining(loginMsg);
  }
}

module.exports = new SampleApp();
