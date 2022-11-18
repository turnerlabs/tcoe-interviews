const Visibility = require('../pageobjects/Visibility')

/**
 * Negative Cases
 */
describe('Exercise 1 - Negative tests cases - Visibility', () => {
    beforeEach(async () => {
        await browser.url('visibility');
        await browser.setTimeout({ 'pageLoad': 10000 });
    });

    it('should change hide button', async () => {
        await Visibility.hideButton.waitForDisplayed();
        await Visibility.hideButton.click();
        await browser.pause(2000);
        await expect(await Visibility.hideButton.getText() === "Hide");
    });

});