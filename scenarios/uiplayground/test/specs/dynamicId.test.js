const DynamicId = require("../pageobjects/dynamicId.page");

describe("Dynamic Id Button Page - Request behavior works as intended", () => {

	it("Should be able to click on dynamic id button", async () => {
    await DynamicId.openPage('dynamicid');
		await DynamicId.verifyPage('dynamicid');
		await DynamicId.clickOnDynamicIdButton();
  });

});