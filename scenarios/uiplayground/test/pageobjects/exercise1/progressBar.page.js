
const Page = require('../page');

/**
 * sub-page containing specific selectors and methods for Progress Bar page
 */
class ProgressBarPage extends Page {
    /**
     * define selectors using getter methods
     */
    get start () {
        return $('#startButton');
    }

    get stop () {
        return $('#stopButton');
    }

    get progressBar () {
        return $('#progressBar');
    }

    async startProgressBar() {
        await this.start.click();
    }

    async stopProgressBarWhenReach75() {
        await browser.waitUntil(async () => {
            const currentPercentage = parseInt(await this.progressBar.getText());
            return currentPercentage >= 75 && currentPercentage <= 80
        }, {
            timeout: 30000,
            timeoutMsg: 'Fail trying to get progress bar percentage',
            interval: 100
        });
        await this.stop.click();
    }

    openPlayground () {
        return super.openPlayground('progressbar');
    }
}

module.exports = new ProgressBarPage();
