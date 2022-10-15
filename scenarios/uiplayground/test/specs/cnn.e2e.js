const { validateURL } = require('../pageobjects/login.page');
const LoginPage = require('../pageobjects/login.page');

describe('Launch application', () => {
    it('should open application webpage', async () => {
        await LoginPage.open();   
        await browser.maximizeWindow();    

        const homePage = await $('//a[@href="/"]');
        await homePage.waitForDisplayed();
    });
              

    it('should open business webpage', async () => {

        await LoginPage.validateURL();

        await expect(browser).toHaveUrlContaining('https://edition.cnn.com');

        console.log('Actual URL of page:', await browser.getUrl());
        await expect(browser).toHaveUrl('https://edition.cnn.com/business');

        console.log('Actual Title of page:', await browser.getTitle());
        await expect(browser).toHaveTitleContaining('Breaking News, Latest News and Videos - CNN');

    });

    it('should not open webpage other than expected', async () => {

        console.log('Actual URL of page:', await browser.getUrl());
        await expect(browser).toHaveUrl('https://edition.cnn.com/world');

        console.log('Actual Title of page:', await browser.getTitle());
        await expect(browser).toHaveTitleContaining('Business');

        await browser.closeWindow();

    });
});


