import ShadowPage from "../pageobjects/shadow.page.js";
import { expect as expectChai } from 'chai';

describe('Progress bar challenge', () => {

    before(() => {
        ShadowPage.open();
    });

    //BUG CASE
    it('Should create GUID, copy to the clipboard and than compare both', async () => {

        await ShadowPage.textGenerator();
        await ShadowPage.copyButton.click();
        let newText = await ShadowPage.saveText();
        await ShadowPage.pasteText();
        let pastedText = await ShadowPage.saveText();
        expectChai(await newText).to.be.equal(pastedText);

    });
    
});

