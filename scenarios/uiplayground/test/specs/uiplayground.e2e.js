const HomePage = require('../pageobjects/home.page');

describe('UI Test Playground', () => {
    it('Reach home page with correct URL', async () => {
        await HomePage.open('home');
        await HomePage.verifyPage('home');

    });
});