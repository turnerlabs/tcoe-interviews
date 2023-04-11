

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProgressPage extends Page {
    /**
     * define selectors using getter methods
     */
    get startButton () {
        return $('#startButton');
    }

    get stopButton () {
        return $('#stopButton');
    }

    get progressBarElement () {
        return $('#progressBar');
    }

    /**
     * a method to click on start button
     */
    async clickStartButton() {
        await this.startButton.click();
    }

    async verifyProgressBarValue () {
        const progressBar = await this.progressBarElement; 
        let ariaValueNow = await progressBar.getAttribute('aria-valuenow');
        while (ariaValueNow < 75) {
            await browser.pause(100); // Wait for 100 milli second before re-checking the attribute value
            ariaValueNow = await progressBar.getAttribute('aria-valuenow');
        }
        if(ariaValueNow>=75){
            await this.stopButton.click();
        }
        return ariaValueNow;

    }
    

    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

export default new ProgressPage();

