

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShadowdomPage extends Page {
    /**
     * define selectors using getter methods
     */

     get shadowdom () {
        return $('guid-generator');
    }

    get editField () {
        return this.shadowdom.shadow$('#editField');
    }

    get buttonGenerate () {
        return this.shadowdom.shadow$('#buttonGenerate');
    }

    get buttonCopy () {
        return this.shadowdom.shadow$('#buttonCopy');
    }

    async clickButton (element) {
        await element.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('shadowdom');
    }
}

module.exports = new ShadowdomPage();
