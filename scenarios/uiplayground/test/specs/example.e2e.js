const expectChai = require('chai').expect;
const Ajax = require('../pageobjects/ajax.page.js');
const Progress = require('../pageobjects/progress.page.js');
const ShadowDom = require('../pageobjects/shadowdom.page.js');
const Visibility = require('../pageobjects/visibility.page');
const Click = require('../pageobjects/click.page');

describe('WB Test suite', () => {
    it('should stop the progress bar in 75%', async () => {
        await Progress.open();
        await Progress.calcProgress(75);
        await expect(Progress.progressBar).toBeExisting();
        let percent = await Progress.progressBar.getText();
        let percentNumber = parseInt(percent.replace('%', ''));
        expectChai(percentNumber).to.be.at.least(75);
        expectChai(percentNumber).to.be.below(80);
    });
    
    it('should appear the sucess message once', async () => {
        await Ajax.open();
        await Ajax.receiveResponse();
        await expect(Ajax.successMessage).toBeExisting();
        await expect(Ajax.messageContainer).toHaveChildren(1);
    });

    it('should appear the unhide button in place of hide button when you click the hide button', async () => {
        await Visibility.open();
        await Visibility.clickHidden();
        await expect(Visibility.buttonElement).toHaveTextContaining('Unhide');
    });

    it('should confirm if the UUID is saved in the clipboard when the copy-button is clicked', async () => {
        let clipboard;
        await ShadowDom.open();
        await ShadowDom.generateButton.click();
        clipboard = await ShadowDom.generateInput.getValue();
        await ShadowDom.copyButton.click();
        await ShadowDom.generateInput.setValue('');
        await ShadowDom.generateInput.click();
        await browser.keys(['Control', 'v']);
        await expect(ShadowDom.generateInput).toHaveValue(clipboard);
    });

    it('should confirm the event based click request does not work as intended',  async () => {
        await Click.open();
        await expect(Click.badButton).toHaveAttr('onclick');
        await expect(Click.badButton).toBeClickable();
    });
});

