const Page = require('../page');

/**
 * sub-page containing specific selectors and methods for Shadow DOM page
 */
class ShadowDomPage extends Page {
    /**
     * define selectors using getter methods
     */
    get generateButton () {
        return $('guid-generator').shadow$('#buttonGenerate');
    }

    get clipboardButton () {
        return $('guid-generator').shadow$('#buttonCopy');
    }

    get editField () {
        return $('guid-generator').shadow$('#editField');
    }

    async generateGUID () {
        await this.generateButton.waitForClickable();
        await this.generateButton.click();
    }

    async clearInputField () {
        await this.editField.setValue('');
        await this.editField.click();
    }

    async copyGUIDToClipboard () {
        await this.clipboardButton.click();
    }

    async pasteClipboardIntoField () {
        //await browser.keys(['Shift', 'Insert']);
        await browser.keys(['Control', 'v']);
        await browser.pause(3000);
    }

    openPlayground () {
        return super.openPlayground('shadowdom');
    }
}

module.exports = new ShadowDomPage();
