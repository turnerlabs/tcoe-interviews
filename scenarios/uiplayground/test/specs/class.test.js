const ClassPage = require("../pageobjects/class.page");

describe("Class Page - Request behavior works as intended", () => {

	it("Should be able to click on primary button", async () => {
    await ClassPage.openPage('classattr');
		await ClassPage.verifyPage('classattr');
		await ClassPage.clickOnPrimaryButton();
  });

});