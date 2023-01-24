const ShadowDomPage = require('../pageobjects/shadowdom.page');

describe('Shadow DOM', () => {
    it('should have a copy button that works', async () => {
        await ShadowDomPage.open();
        await ShadowDomPage.clickGenerateBtn();
        await ShadowDomPage.clickCopyBtn();
        let copiedText = await ShadowDomPage.getEditFieldText();
        await ShadowDomPage.clearEditField();
        await ShadowDomPage.pasteValueIntoEditField();
        let returnedText = await ShadowDomPage.getEditFieldText();
        await expect(returnedText).toBe(copiedText);
    });
});