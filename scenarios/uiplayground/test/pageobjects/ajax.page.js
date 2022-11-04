const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AjaxPage extends Page {
        /**
     * define selectors using getter methods
     */
    get btnAjax () {
        return $('#ajaxButton');
    }

    get content () {
        return $('#content')
    }

    get contentElems () {
        return $$('#content > p');
    }

    get spinner () {
        return $('#spinner');
    }

    async clickBtnAjax() {
       await this.btnAjax.click();
    }

    async waitSpinnerEnds () {
        await this.spinner.waitForDisplayed({timeout: 30000, reverse: true});
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        return super.open('ajax');
    }
}

module.exports = new AjaxPage();