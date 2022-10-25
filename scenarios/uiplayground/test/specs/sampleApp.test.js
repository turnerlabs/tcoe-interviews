const SampleAppPage = require("../pageobjects/sampleApp.page");

describe("Sample App Page - Negative test cases", () => {

	it("Should not be able to succesful login with invalid credentials", async () => {
    await SampleAppPage.openPage('sampleapp');
		await SampleAppPage.verifyPage('sampleapp');

    await SampleAppPage.loginByCredentialsType("invalid");
		await SampleAppPage.verifyLogin(false);
  });

  it("Should not be able to succesful login with empty credentials", async () => {
    await SampleAppPage.openPage('sampleapp');
		await SampleAppPage.verifyPage('sampleapp');

    await SampleAppPage.clickOnLoginButton("invalid");
		await SampleAppPage.verifyLogin(false);
  });

});