import { Key } from 'webdriverio'
import Page from "./page.js";

class ShadowCopy extends Page{

    get generator() {
        return $('guid-generator');
    }

    get generatorTextButton() {
        return this.generator.shadow$('button#buttonGenerate');
    }

    get copyButton() {
        return this.generator.shadow$('button#buttonCopy');
    }

    get editField() {
        return this.generator.shadow$('input#editField');
    }

    /**
        * a method to get value in element
        */
    async generatorText() {
        await this.generatorTextButton.waitForClickable()
        await this.generatorTextButton.click()
        //Below code is to cope text form input field to clipboard
        // await this.editField.click()
        // await browser.keys([Key.Control, 'a', 'c'])
        // await browser.pause(3000)
    }
    /**
     * a method to click on copy button
     */
    async copyText() {
        await this.copyButton.click()
    }
    /**
         * a method to get value of text field
         */
    async saveText() {
        return await this.editField.getValue()
    }
    /**
        * a method to paste value after click on copy button
        */     
    async pasteText() {
        await this.editField.clearValue()
        // await browser.pause(3000)
        await this.editField.click()
        // await browser.pause(3000)
        await browser.keys([Key.Control, 'v'])
        // await browser.pause(3000)
        return await this.editField.getValue()
    }
    open(){
        return super.open("shadowdom")
    }
}

export default new ShadowCopy();