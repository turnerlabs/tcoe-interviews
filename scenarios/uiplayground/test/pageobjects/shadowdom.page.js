const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShadowdomPage extends Page {
    /**
     * define selectors using getter methods
     */
    get guidGeneratorCont () {
        return $('guid-generator')
    }

    get editField () {
        return this.guidGeneratorCont.shadow$('#editField');
    }

    get buttonGenerate () {
        return this.guidGeneratorCont.shadow$('#buttonGenerate');
    }

    get buttonCopy () {
        return this.guidGeneratorCont.shadow$('#buttonCopy');
    }

    async generateGUID () {
        await this.buttonGenerate.click();
    }

    async copyGUID () {
        await this.buttonCopy.click();
    }

    async setEditField (value) {
        await this.editField.setValue(value);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        return super.open('shadowdom');
    }
}

module.exports = new ShadowdomPage();