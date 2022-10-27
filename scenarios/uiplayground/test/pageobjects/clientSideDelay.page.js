const Page = require('./page');

/**
 * Client Side Delay Page
 */
class ClientSideDelayPage extends Page {
    /**
     * Page Locators
     */
    get clientSideLogicTriggerButton() {
        return $('.btn.btn-primary')
    }

    get spinner() {
        return $('#spinner')
    }

    get successMessage() {
        return $('.bg-success')
    }

    /**
     * Click on Client Side Trigger Button
     */
    async clickOnClientSideLogicTriggerButton() {
        await this.clientSideLogicTriggerButton.click();
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
        return super.open('clientdelay');
    }
}

module.exports = new ClientSideDelayPage();