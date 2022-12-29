import Page from './page.js';

class ShadowPage extends Page {

    get generateButton() {
        return $('guid-generator').shadow$('#buttonGenerate');
    }

    get copyButton() {
        return $('guid-generator').shadow$('#buttonCopy');
    }

    get inputField() {
        return $('guid-generator').shadow$('#editField');
    }

    async textGenerator() {
        await (await this.generateButton).waitForClickable()
        await this.generateButton.click()
        let createdText = await this.inputField.getValue()
        return createdText;
    }

    async saveText() {
        let createdText = await this.inputField.getValue()
        return createdText;
    }

    async pasteText() {
        await this.inputField.clearValue()
        await this.inputField.click()
        await browser.keys(['Control', 'v'])
    }

    open(){
        super.open('/shadowdom');
    }


}
export default new ShadowPage();