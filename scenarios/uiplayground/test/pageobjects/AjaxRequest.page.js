const Page = require('./page');
const {ajaxRequestSettings} = require("../dataProviders/ajaxRequestSettings");


class AjaxRequestPage extends Page{
    get requestButton() {
        return $('#ajaxButton');
    }

    get spinnerIcon() {
        return $('#spinner');
    }

    get contentBox() {
        return $('#content');
    }

    async clickRequestButton(numRequests) {
        await this.requestButton.waitForDisplayed();
        for(let i=0; i < numRequests; i++) {
            await this.requestButton.click();
            await this.spinnerIcon.waitForDisplayed();
            /** Implicit pause just to simulate multiple click **/
            await browser.pause(500);
        }
    }

    async checkSpinnerDisappear() {
        await this.spinnerIcon.waitForDisplayed({reverse: true, timeout: 25000});
    }

    async countResultsElements(expectedResults) {
        await this.contentBox.waitForDisplayed();
        const results = await this.contentBox.$$('p');
        await expect(results.length).toBe(expectedResults);
    }
}

module.exports = new AjaxRequestPage();