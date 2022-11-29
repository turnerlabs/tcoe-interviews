const shadowdomPage = require("../pageobjects/shadowDom.page");

describe('GUID Generator', () => {
    it('should not work the copy the button', async () => {
        await shadowdomPage.open()
        await shadowdomPage.generateGuid()
        const inputGenerator = await shadowdomPage.getInputValue()
        await shadowdomPage.copyPasteGuid()
        const pasteGenerator = await shadowdomPage.getInputValue()
        await expect(inputGenerator).toBe(pasteGenerator)
    });
});
