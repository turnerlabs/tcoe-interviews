const Page = require('./page');

const {progressbarSettings} = require('../dataProviders/progressbarSettings');

class ProgressbarPage extends Page {
    get startButton() {
        return $('#startButton');
    }

    get stopButton() {
        return $('#stopButton');
    }

    get progressBar() {
        return $('#progressBar');
    }

    get results() {
        return $('#result');
    }


    async clickStartButton() {
        await this.startButton.waitForDisplayed();
        await this.startButton.click();
    }

    async clickStopButton() {
        await this.stopButton.waitForDisplayed();
        await this.stopButton.click();
    }

    async checkProgress(stopValue) {
        let currentValue;
        await this.progressBar.waitForDisplayed();
        await browser.waitUntil(async () => {
                currentValue = await this.progressBar.getText();
                return currentValue === stopValue;
            },
            {
                timeout: progressbarSettings.timeoutMilliseconds,
                timeoutMsg: progressbarSettings.timeoutMessage
            });
    }

    async evaluateTolerance(tolerance) {
        await this.results.waitForDisplayed();
        const progressbarValue = await this.progressBar.getText();
        await expect(this.results).not.toHaveTextContaining('n/a');
        const difference = Math.abs(parseInt(progressbarValue) - parseInt(progressbarSettings.desiderableStopValue));
        await expect(difference).toBeLessThanOrEqual(parseInt(tolerance));
    }
}

module.exports = new ProgressbarPage();