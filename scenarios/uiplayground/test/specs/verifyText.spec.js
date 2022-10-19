const homePage = require('../pageobjects/home/home.page');
const verifyText = require('../pageobjects/verifyText/verifyText.page');


describe('Go to Verify Text section and record Text', () => {
    it('should go to the VerifyText Section and then validate the text value contain Welcome', async () => {
        await homePage.open('verifytext');
        await expect(verifyText.welcomeUserText).toHaveTextContaining('Welcome UserName!');
    });

});