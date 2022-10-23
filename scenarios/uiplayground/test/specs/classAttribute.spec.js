const HomePage = require('../pageobjects/home.page');
const ClassAttributePage = require('../pageobjects/classAttribute.page');

describe('Class Attribute Test', () => {
    it('Click blue button on class attribute page', async () => {
        await HomePage.open('home');
        await HomePage.verifyPage('home');

        await ClassAttributePage.open('classattr');
        await ClassAttributePage.verifyPage('classattr');
        await ClassAttributePage.clickBlueButton();

    });
});