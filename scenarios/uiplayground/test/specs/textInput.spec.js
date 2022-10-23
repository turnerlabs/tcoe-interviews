const HomePage = require('../pageobjects/home.page');
const TextInputPage = require('../pageobjects/textInput.page');

describe('Text Input Test', () => {
    it('Enter text input and check on button', async () => {
        await HomePage.open('home');
        await HomePage.verifyPage('home');

        await TextInputPage.open('textinput');
        await TextInputPage.verifyPage('textinput');
        await TextInputPage.fillField('QC Rocks!');

    });
});