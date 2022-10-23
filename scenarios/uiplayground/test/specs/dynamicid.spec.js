const HomePage = require('../pageobjects/home.page');
const DynamicIDPage = require('../pageobjects/dynamicId.page');

describe('Dynamic ID Test', () => {
    it('Reach dynamic ID page with correct URL and click on button', async () => {
        await HomePage.open('home');
        await HomePage.verifyPage('home');

        await DynamicIDPage.open('dynamicid');
        await DynamicIDPage.verifyPage('dynamicid');
        await DynamicIDPage.clickDynamicButton();

    });
});