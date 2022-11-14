

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProgressBarPage extends Page {
    /**
     * define selectors using getter methods
     */
    get startButton () {
        return $('#startButton');
    }

    get stopButton () {
        return $('#stopButton');
    }

    get result () {
        return $('#result');
    }

    get progressBar () {
        return $('.progress #progressBar');
    }

    async clickButton (element) {
        await element.click();
    }

    async stopProgressAt (stop = 75) {
        let value = await this.progressBar
        if ((await value.getAttribute("aria-valuenow")) >= stop){
            return;
        } else {
            // await browser.pause(500)
            await this.stopProgressAt()
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('progressbar');
    }
}

module.exports = new ProgressBarPage();
