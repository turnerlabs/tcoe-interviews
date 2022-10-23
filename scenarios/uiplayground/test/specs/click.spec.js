const HomePage = require('../pageobjects/home.page');
const ClickPage = require('../pageobjects/click.page');

describe('DOM click Test', () => {
    it('Reach click DOM page with correct URL and click on button', async () => {
        await HomePage.open('home');
        await HomePage.verifyPage('home');

        await ClickPage.open('click');
        await ClickPage.verifyPage('click');
        await ClickPage.clickDOMButton();

    });
});