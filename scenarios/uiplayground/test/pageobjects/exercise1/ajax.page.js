const Page = require('../page');

/**
 * sub-page containing specific selectors and methods for Ajax page
 */
class AjaxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get ajaxButton () {
        return $('#ajaxButton');
    }

    get messageContainer () {
        return $$('#content p');
    }

    async triggerAjaxButtonTwice () {
        await browser.pause(1000);
        browser.setupInterceptor();
        await this.ajaxButton.click();
        await browser.pause(500);
        await this.ajaxButton.click();
    }

    async waitForAjaxRequestToComplete () {
        await browser.waitUntil(async () => {
            return !(await browser.hasPendingRequests())
        }, {
            timeout: 35000,
            timeoutMsg: 'Fail trying to get pending request',
        });
    }

    openPlayground () {
        return super.openPlayground('ajax');
    }
}

module.exports = new AjaxPage();
