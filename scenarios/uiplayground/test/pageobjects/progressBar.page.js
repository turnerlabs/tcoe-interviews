const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProgressBar extends Page {
        /**
     * define selectors using getter methods
     */
    get btnStart () {
        return $('#startButton');
    }

    get btnStop () {
        return $('#stopButton');
    }

    get resultText () {
        return $('#result');
    }

    get barProgressValue () {
        return $('#progressBar');
    }

    async clickStart() {
       await this.btnStart.click();
    }

    async stopAtPercentage (percentage) {
        browser.waitUntil(async () => await this.barProgressValue.getText() == percentage);
        for (let i=0; i < 30000; i++) {
            if (await this.barProgressValue.getText() == percentage) {
                await this.btnStop.click();
                break;
        } 
    }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        return super.open('progressbar');
    }
}

module.exports = new ProgressBar();