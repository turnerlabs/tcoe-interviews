const ClickPage = require('../pageobjects/Click.page');
const {navigationSettings} = require('../dataProviders/navigation');
const {clickButtonSettings} = require("../dataProviders/clickButtonSettings");

describe('Testing to the main button turns red after click', () => {
    it('should navigate to the url and click the main button', async () => {
        await ClickPage.navigateToWebsite(navigationSettings.sites.clickButton);
        await ClickPage.clickMainButton();
    });

    it('should verify the button changes to red', async () => {
        await ClickPage.checkButtonGetsClassDanger(clickButtonSettings.redValues.className);
    });
});