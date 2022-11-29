const Page = require("./page");

class ShadowDomPage extends Page {
    get guidGenerator() {
        return $("guid-generator")
    }

    get generatorButton() {
        return this.guidGenerator.shadow$("#buttonGenerate");
    }

    get inputField() {
        return this.guidGenerator.shadow$("#editField");
    }

    get copyButton() {
        return this.guidGenerator.shadow$("#buttonCopy");
    }

    async open() {
        await super.open("shadowdom")
    }

    async getInputValue() {
        return await this.inputField.getValue()
    }

    async generateGuid() {
        await browser.waitAndClick(this.generatorButton)
    }

    async copyPasteGuid() {
        await browser.waitAndClick(this.copyButton)
        await this.inputField.clearValue()
        await this.inputField.setValue(["Meta", "v"])
    }
}

module.exports = new ShadowDomPage()