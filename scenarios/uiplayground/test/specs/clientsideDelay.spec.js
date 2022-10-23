const HomePage = require('../pageobjects/home.page');
const ClientSideDelayPage = require('../pageobjects/clientsideDelay.page');

describe('Client Delay Test', () => {
    it('Click button on client delay page', async () => {
        await HomePage.open('home');
        await HomePage.verifyPage('home');

        await ClientSideDelayPage.open('clientdelay');
        await ClientSideDelayPage.verifyPage('clientdelay');
        await ClientSideDelayPage.clickButton();

    });
});