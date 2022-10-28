const Page = require('./page');

/**
 * Shadow DOM Page
 */
class ShadowDomPage extends Page {
    /**
     * Page Locators
     */
    get guidGeneratorInput() {
        return $('guid-generator')
            .shadow$('#editField');
    }

    get generateButton() {
        return $('guid-generator')
            .shadow$('#buttonGenerate');
    }

    get copyButton() {
        return $('guid-generator')
            .shadow$('#buttonCopy');
    }

    /**
     * Click on Generate Button
     */
    async clickOnGenerateButton() {
        await this.generateButton.click();
    }

    /**
     * Click on Copy Button
     */
    async clickOnCopyButton() {
        await this.copyButton.click();
    }

    /**
     * Get current GUID Value
     */
    async getCurrentGuidValue() {
        return await this.guidGeneratorInput.getValue();
    }

    /**
     * Get clipboard GUID Value
     */
    async getClipboardGuidValue() {
        await this.guidGeneratorInput.clearValue();
        await this.guidGeneratorInput.click();
        await browser.keys(["Control", "v"]);
        return await this.guidGeneratorInput.getValue();
    }

    /**
     * Open Base Page
     */
    open () {
        return super.open('shadowdom');
    }
}

module.exports = new ShadowDomPage();
