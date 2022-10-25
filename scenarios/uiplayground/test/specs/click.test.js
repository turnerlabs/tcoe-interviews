const Click = require("../pageobjects/click.page");

describe("Click Page - Response behavior works as intended", () => {

	it("Should be able to click on primary button", async () => {
    await Click.openPage('click');
		await Click.verifyPage('click');
		await Click.clickOnButton();
    await Click.verifyBadButtonPressed();
  });

});