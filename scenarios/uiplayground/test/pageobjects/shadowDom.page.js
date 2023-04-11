

import Page from './page.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class shadowDomPage extends Page {
    /**
     * define selectors using getter methods
     */
    get generateButton () {
        return $('#buttonGenerate');
    }

    

    async getGeneratedValue() {
         const parentElement = await browser.$('div guid-generator'); 
         const generateButton = await parentElement.shadow$('.button-generate'); 
         await generateButton.click();
         
         const inputField = await parentElement.shadow$('#editField');
         await inputField.click();
         const inputValue = await inputField.getValue();

         return inputValue
    }

    async getClipboardValue() {
        const parentElement = await browser.$('div guid-generator');
        const buttonCopy = await parentElement.shadow$('#buttonCopy');
        await buttonCopy.click();

        const clipboardContent = await browser.execute(() => {
           return navigator.clipboard.readText();
         });
         return clipboardContent;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

export default new shadowDomPage();
