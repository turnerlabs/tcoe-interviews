const Click = require('../pageobjects/click.page')

/*
    Navigate to the url -http://uitestingplayground.com/click. Write a test case that proves the the button turns red
    after click.
    */

describe('Click test', () => {

    //Navigating to the URL Click and waiting for the page load
    beforeEach(async () => {
        await browser.url('click');
        await browser.setTimeout({ 'pageLoad': 10000 });
    });


    // Testcase to check the button color
    it('should change button color to green', async () => {
        const initialBadButtonColor = await Click.getBadButtonColor;
        await Click.badButton.click();
        await browser.pause(4000);
        await expect(await Click.getBadButtonColor == initialBadButtonColor && await Click.getBadButtonColor() == "#218838");
    });

});