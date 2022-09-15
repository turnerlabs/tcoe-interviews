const HomePage = require('../pageobjects/home.page');

describe('When user launch the uiplayground url', () => {
    it('And user click on the resource link Then user lands on the resources page', async () => {
        await HomePage.open();
        await HomePage.resourcesLink.click();
        await expect(browser).toHaveUrlContaining('resources')
    });
});