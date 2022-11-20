const Visibility = require('../pageobjects/visibility.page')

/*
    Navigate to the url - http://uitestingplayground.com/visibility and click on hide button then expect unhide button
    to show in place of hide button
    */

describe('Visibility test', () => {

    //Navigating to the URL Visibility and waiting for the page load
    beforeEach(async () => {
        await browser.url('visibility');
        await browser.setTimeout({ 'pageLoad': 10000 });
    });


    // Testcase to check the Visibility
    it('should change hide button', async () => {
        await Visibility.hideButton.waitForDisplayed();
        await Visibility.hideButton.click();
        await browser.pause(2000);
        await expect(await Visibility.hideButton.getText() === "Hide");
    });

});