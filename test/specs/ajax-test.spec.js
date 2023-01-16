const AjaxPage = require('../pageobjects/ajax-data.page');

describe('Ajax Test', () => {
    it('Should open url', async () => {
        await AjaxPage.open();
    });

    it('Should click on Ajax Button', async () => {
        await AjaxPage.clickOnAjaxButton();
    });

    it('Should verify spinner displayed', async () => {
        await AjaxPage.verifySpinnerDisplayed();
    });

    it('Should verify Data loaded', async () => {
        await AjaxPage.ajaxPageLoaded();
    });
});


