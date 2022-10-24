const InputTextPage = require('../pageobjects/textInput.page');


describe('validate page input text ', () => {
    it('the button is displayed', async () => {
        await InputTextPage.open();
        await expect(InputTextPage.buttonNewText).toBeExisting();
    });

    it('the input is displayed', async () => {
        await InputTextPage.open();
        await expect(InputTextPage.inputText).toBeExisting();
    });

    it('the input is enable', async () => {
        await InputTextPage.open();
        await expect(InputTextPage.inputText).toBeEnabled();
    });

    it('Set New Button Name - Failed', async () => {

        await InputTextPage.open();
        await InputTextPage.sendTextInput('Hi world');
        await InputTextPage.clickButtonNewText()
        await expect(InputTextPage.buttonNewText).toHaveTextContaining('Hi world');
  
    });
});
