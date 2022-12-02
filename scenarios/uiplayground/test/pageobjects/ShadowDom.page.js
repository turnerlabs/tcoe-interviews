const Page = require('./page');

class ShadowDomPage extends Page {
    /** Selector Setters **/
    get guidGenerator() {
        return $('<guid-generator />');
    }

    get guidInput() {
        return this.guidGenerator.shadow$('#editField');
    }

    get generateGuidButton() {
        return this.guidGenerator.shadow$('#buttonGenerate');
    }

    get copyButton() {
        return this.guidGenerator.shadow$('#buttonCopy');
    }

    /** Methods **/
    async generateGuid() {
        await this.guidGenerator.waitForDisplayed();
        await this.generateGuidButton.waitForDisplayed();
        await this.generateGuidButton.click();
    }

    async validateInput() {
        await this.guidInput.waitForDisplayed();
        await expect(this.guidInput).not.toHaveValue('');
    }

    async copyGuidValue() {
        await this.copyButton.waitForDisplayed();
        await this.copyButton.click();
    }

    async validatePastedValue() {
        await this.guidInput.waitForEnabled();
        const originalValue = await this.guidInput.getValue();
        await this.guidInput.clearValue();
        await this.guidInput.click();
        await browser.keys(['Control', 'v']);
        await expect(this.guidInput).toHaveValue(originalValue);
    }
}

module.exports = new ShadowDomPage();