const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PlayVideoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get playBtn () {return $("div[title='Play']");}
    get progressVideoBar2 () {return $("div.pui_control-bar_progress-bar");}
    get suggestedVideos () {return $$("div[data-editable='headline']");}
    get videoNamePlaying () {return $("div.video-resource__details--leaf div.video-resource__headline");}
   

    /**
     * thie method press play functionality button
     */
    async pressPlayBtn(){
        await this.playBtn.waitForClickable();
        await this.playBtn.click();
    }

    /**
     * this method wait that the progress video time value be different to 00:00
     * @returns the progress video time value
     */
    async getProgressVideoBar(){
        await this.progressVideoBar2.waitForExist();
        await browser.waitUntil( 
            async() =>(await this.progressVideoBar2.getAttribute("aria-valuetext")) !== "00:00",
                {
                    timeout:20000,
                    timeoutMsg:"Video didn't start"
                    
                });
        return await this.progressVideoBar2.getAttribute('aria-valuetext');
    }

    /**
     * this method click on the next suggested video
     * @returns the text of next list of suggested video
     */
    async validateSuggestFeature(){
        
         await this.playBtn.waitForClickable();
         await this.suggestedVideos[2].click();
         return await this.suggestedVideos[2].getText();
    }

    /**
     * This method returns the name of the video which is playing 
     * @returns 
     */
    async getVideoPlayingName(){
        return await this.videoNamePlaying.getText();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new PlayVideoPage();
