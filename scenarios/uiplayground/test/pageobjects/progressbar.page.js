const Page = require('./page');
const percentageAttribute = 'aria-valuenow'

/**
 * Progress Bar Page
 */
class ProgressBarPage extends Page {
    /**
     * Page Locators
     */
    get startButton() {
        return $('#startButton')
    }

    get stopButton() {
        return $('#stopButton')
    }

    get progressBar() {
        return $('#progressBar')
    }

    /**
     * Click on Start Button
     */
    async clickOnStartButton() {
        await this.startButton.click();
    }

    /**
     * Wait the Progress Bar to Percentage Value
     *
     */
    async waitProgressBarToPercentage(percentage) {
        let currentPercentage = await this.progressBar.getAttribute(percentageAttribute)
        while (currentPercentage !== percentage) {
            currentPercentage = await this.progressBar.getAttribute(percentageAttribute)
        }
        await this.stopButton.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('progressbar');
    }
}

module.exports = new ProgressBarPage();
