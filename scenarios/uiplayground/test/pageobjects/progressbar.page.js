const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Progressbar extends Page{
    /**
     * define selectors using getter methods
     */
    get startButton() {
        return $('button#startButton');
    }

    get stopButton() {
        return $('button#stopButton');
    }

    get progressBar() {
        return $('div#progressBar');
    }

    /**
    * a method to capture the progress bar
    */
    async startPlaygroundBar() {
        await this.startButton.waitForClickable()
        await this.startButton.click()
        await browser.waitUntil(
            async () => {
                return (await this.getNumberProcessBar()) >= 75

            },
            15000,
            'Error',
            5);


    }
    /**
        * a method to click on stop button
        */
    async stopPlaygroundBar() {
        await this.stopButton.click()
    }
    /**
           * a method to replsde % and return a integer
           */
    async getNumberProcessBar() {
        let elementText = await this.progressBar.getText();
        elementText = elementText.replace('%', '');
        return parseInt(elementText);
    }
  /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('progressbar');
    }
}

module.exports = new Progressbar();

