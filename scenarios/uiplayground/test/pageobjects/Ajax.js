class Ajax {
    /**
     * Define selectors
     */

    get buttonTriggeringAjaxRequest() {
        return $('#ajaxButton');
    }

    get resultField() {
        return $('#content');
    }

    get spinner() {
        return $('#spinner');
    }

    get message() {
        return $('.bg-success')
    }

    async clickingMultipleTimes() {
        await this.buttonTriggeringAjaxRequest.click();
        await browser.pause(16000);
        await this.buttonTriggeringAjaxRequest.click();
        await browser.pause(16000);
    }
}

module.exports = new Ajax();