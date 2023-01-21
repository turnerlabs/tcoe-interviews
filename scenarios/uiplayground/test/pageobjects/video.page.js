

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class videoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get Playbtn () {
        return $('//button[@class="pui_center-controls_big-play-toggle sc-iAyFgw cnBpEa"]//*[name()="svg"]');
    }
   
    get Pausebtn () {
        return $('//button[@class="pui_center-controls_big-play-toggle sc-iAyFgw cnBpEa"]//*[name()="svg"]');
    }

    get suggestions () {
        return $('.video-playlist__info-headline.inline-placeholder');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async ValidateVideoPlay () {
        const myElem = await this.Playbtn;
        await myElem.waitForDisplayed()
        await myElem.click();
        await myElem.click();

       
        // await this.Pausebtn.click();
        
        // await this.suggestions.getText();
         
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        browser.maximizeWindow();

        return super.open('videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn');
    }
}

module.exports = new videoPage();
