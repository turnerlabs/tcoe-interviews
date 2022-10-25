const LoginPage = require('../pageobjects/login.page');
const Page = require('../pageobjects/page');
const SecurePage = require('../pageobjects/secure.page');
const InputPage = require('../pageobjects/input.page');

describe('UI application', () => {
    it('should open the UI application', async () => {
        LoginPage.open();
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'UI Test Automation');
    });

    it('should validate the UI by url', async () => {
        LoginPage.open();
        await expect(browser).toHaveUrl('http://uitestingplayground.com/');
        await expect(browser).not.toHaveTitle('')
    });

     it('should click on Text Input', async () => {
        LoginPage.open();
        const inputPage = await (SecurePage.flashAlert);
        inputPage.scrollIntoView();
        await InputPage.btnTextInput.click();
        await expect(browser).toHaveUrl('http://uitestingplayground.com/textinput');
        await expect(InputPage.titleInput).toBeExisting();
    });

    it('should validate on Text Input page', async () => {
        await expect(browser).toHaveUrl('http://uitestingplayground.com/textinput');
        const doesExist = await (InputPage.titleInput).isExisting();
        await expect(doesExist).toBe(true);
    });

    it('should enter any data', async () => {
        await expect(InputPage.titleInput).toBeExisting();
        const inputText = await InputPage.inputValue;
        const value = await inputText.setValue("Test");
        console.log(value); // outputs: "Test"
        await InputPage.btnInputValue.click();
    });

    it('should be the same data', async () => {
        await expect(InputPage.titleInput).toBeExisting();
        const el = InputPage.inputValue;
        const sameEl = InputPage.btnInputValue;
        el.isEqual(sameEl);
        await browser.pause(1000);
    });
});
