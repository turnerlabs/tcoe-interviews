const Page = require('./page');

class ShadowDomPage extends Page {

    get generateBtn() {
        return $('guid-generator').shadow$('#buttonGenerate');
    }

    get editField() {
        return $('guid-generator').shadow$('#editField');
    }

    get copyBtn() {
        return $('guid-generator').shadow$('#buttonCopy');
    }

    open() {
        return super.open('shadowdom');
    }

    async clickGenerateBtn() {
        await this.generateBtn.click();
    }

    async clickCopyBtn() {
        await this.copyBtn.click();
    }

    async getEditFieldText() {
        return await this.editField.getValue();
    }

    async clickEditField() {
        await this.editField.click();
    }

    async clearEditField() {
        await this.editField.clearValue();
    }

    async pasteValueIntoEditField() {
        await this.clickEditField();
        await browser.keys(['Control', 'v']);
    }
}

module.exports = new ShadowDomPage();