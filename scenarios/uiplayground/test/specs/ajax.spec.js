const AjaxPage = require('../pageobjects/ajax.page');

describe('Ajax button', () => {
    it('should produce only one confirmation message after completed request', async () => {
        await AjaxPage.open();
        await AjaxPage.clickAjaxBtn();
        await AjaxPage.waitForDataLoadIcon();
        expect(await AjaxPage.countContentElements()).toBe(1);
        await AjaxPage.clickAjaxBtn();
        await AjaxPage.waitForDataLoadIcon();
        expect(await AjaxPage.countContentElements()).toBe(1);
    });
});