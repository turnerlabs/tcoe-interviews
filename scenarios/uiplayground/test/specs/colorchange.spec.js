const ClickPage = require('../pageobjects/colorchange.page');
const Utils = require('../helpers/stringUtils/colorchange')

describe('Button That Ignores DOM Click Event', () => {
    it('should change color to red when clicked', async () => {
        await ClickPage.open();
        await ClickPage.clickColoredBtn();
        await ClickPage.waitForColorChange();
        const newButtonColor = (await ClickPage.coloredBtn.getCSSProperty('background-color')).parsed.hex;
        expect(newButtonColor).toBe(Utils.RED_COLOR);
    });
});