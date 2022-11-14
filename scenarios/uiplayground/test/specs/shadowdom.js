const ShadowdomPage = require('../pageobjects/shadowdom');
const expectChai = require('chai').expect;

describe('Copy button scenarios', () => {
    it("should copy the selected test", async () => {
        await ShadowdomPage.open();
        browser.pause(2000)
        await ShadowdomPage.clickButton(ShadowdomPage.buttonGenerate);
        let numberGenerated = await ShadowdomPage.editField.getValue();
        await ShadowdomPage.clickButton(ShadowdomPage.buttonCopy);
        await ShadowdomPage.editField.setValue(['\uE009', 'v']);
        let numberCopied = await ShadowdomPage.editField.getValue();
        expectChai(numberGenerated).to.eq(numberCopied);
    });
});
