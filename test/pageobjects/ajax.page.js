const Page = require("./page")

class AjaxPage extends Page {

    get ajaxBtn() {
        return $("#ajaxButton")
    }

    get spinner() {
        return $("#spinner")
    }

    get contentData() {
        return $$("#content>p")
    }

    async open() {
        await super.open("ajax")
    }

    async ajaxRequest() {
        await browser.waitAndClick(this.ajaxBtn)
    }

    async waitingForResponse() {
        await this.spinner.waitForDisplayed({ timeout: 20000, reverse: true });
    }

    async responseData() {
        return await this.contentData
    }
}

module.exports = new AjaxPage()