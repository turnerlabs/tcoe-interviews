const HomePage = require('../pageobjects/home.page');
const ScrollBarsPage = require('../pageobjects/scrollBars.page');

describe('Scroll Bars Test', () => {
    it('Click on button on scroll page', async () => {
        await HomePage.open('home');
        await HomePage.verifyPage('home');

        await ScrollBarsPage.open('scrollbars');
        await ScrollBarsPage.verifyPage('scrollbars');
        await ScrollBarsPage.scrollAndClick();

    });
});