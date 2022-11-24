const ShadowDomPage = require('../../pageobjects/exercise1/shadowdom.page');

describe('Shadow DOM Playground', () => {
    it('should generated GUID and after copying it to be equal | Bug-Tag', async () => {
        await ShadowDomPage.openPlayground();
        await ShadowDomPage.generateGUID();
        await ShadowDomPage.copyGUIDToClipboard();
        const guidGenerated = await ShadowDomPage.editField.getValue();
        await ShadowDomPage.clearInputField();
        await ShadowDomPage.pasteClipboardIntoField();
        await expect(ShadowDomPage.editField).toHaveTextContaining(guidGenerated);
    });
});
