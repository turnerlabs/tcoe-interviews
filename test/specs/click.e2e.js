const clickPage = require("../pageobjects/click.page");

describe('Emulate Click Event', () => {
    it('should click button and change to color red', async () => {
        await clickPage.open()
        await clickPage.clickButton()
        await clickPage.waitColorChange()
        await expect(await clickPage.verifyColor()).toEqual(await clickPage.getRedColor())
    });
});