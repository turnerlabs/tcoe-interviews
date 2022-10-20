
const hooks = require( "../specs/hooks.js");
const homePage = require( "../pageobjects/home.page");
const inputTextPage = require( "../pageobjects/inputText.page");

describe('page input text section', () => {
    it('Scenario: validate text input section', async () => {
        await hooks.openHomePage();
        await homePage.sectionInputText();
        await inputTextPage.enterText();
        const textButton = await inputTextPage.btnUpdateButton;
        await expect(textButton).toHaveText('text input')
        await expect(browser).toHaveUrlContaining('textinput')
        
    });
});