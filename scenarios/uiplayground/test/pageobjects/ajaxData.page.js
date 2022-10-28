const Page = require('./page');

/**
 * Ajax Data Page
 */
class AjaxDataPage extends Page {
    /**
     * Page Locators
     */
    get ajaxTriggerButton() {
        return $('#ajaxButton')
    }

    get spinner() {
        return $('#spinner')
    }

    get successMessage() {
        return $('.bg-success')
    }

    get successMessageList() {
        return $$('.bg-success')
    }

    /**
     * Click on Ajax Button
     */
    async clickOnAjaxTriggerButton() {
        await this.ajaxTriggerButton.click();
    }

    /**
     * Wait to JS Processing finished
     */
    async waitToJavaScriptProcessingFinished() {
        await this.spinner.waitForDisplayed({
            timeout: 60000,
            reverse: true,
            timeoutMsg: 'JS Processing doesnt finished in the expected time'
        });
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('ajax');
    }
}

module.exports = new AjaxDataPage();