const Ajax = require('../pageobjects/Ajax');

/**
 * Negative Cases
 */
describe('Exercise 1 - Negative tests cases', () => {
    beforeEach(async () => {
        await browser.url('ajax');
        await browser.setTimeout({ 'pageLoad': 10000 });
        await Ajax.buttonTriggeringAjaxRequest.waitForDisplayed();
    });

    it('should appears ony one message by clicking more than once', async () => {
        await Ajax.buttonTriggeringAjaxRequest.click();
        await Ajax.clickingMultipleTimes()
        await Ajax.resultField.waitForDisplayed();
        await expect(await Ajax.message.nextElement() != null);
    });

});