
const  Constants = require('../../support/Constants.json');
const ImageData = require('../../support/ImageData.json');
const fetch = require('node-fetch');


class VideoPage {
    /**
     * define selectors using getter methods
     */
    get videoTitle () {  return $('.video-resource__headline');    }

    get playButton () {  return $('//div[@title="Play"]/button');  }

    get buttonTermsOfClose() { return $('.terms-of-service__close-btn'); }

    get pauseIcon() { return $('//div[@class="fave-player-container fave-top-player fave-no-mobile"]//button[contains(@class,"play")]')  }

    get playIcon() { return $('#playIconTitle'); }

    get advertisementDiv() {  return $('.tui-ad-slate');   }

    get advertisementCountDown() {  return $('.tui-ad-slate__countdown');  }

    get videoStatus() {   return $('//div[contains(@class,"pui_metadata_status ")]');  }

    get mainVideoDiv() { return $('.sc-gzVnrw pui sc-kkGfuU IAmeA');  }

    get recommendedSection() { return $$('//div[@class="video-playlist__items-container video-playlist__items-container--expanded"]/div');}

    /**
     *  To validate if the VideoTitle and Play button are displayed
     */

    async validateVideo() {
        await this.videoTitle.waitForDisplayed({timeout:Constants.twentySec});
        await expect(this.videoTitle).toBeDisplayed();
        await this.playButton.waitForClickable({timeout:Constants.twentySec});
        await expect(this.playButton).toBeDisplayed();
    }

    /**
     *  To click play button 
     */

    async playVideo() {
        await this.playButton.waitForClickable({timeout:Constants.twentySec});
        await this.playButton.click();
    }

    /**
     *  To validate if the advertisement is visible or not
     */
    async validateAdvertisement() {
        await this.advertisementDiv.waitForDisplayed({timeout:Constants.sixtySec});
        await expect(this.advertisementDiv).toBeDisplayed();
        if( await this.buttonTermsOfClose.isExisting()) {
            await this.buttonTermsOfClose.click();
        }
    }

    /**
     *  To validate if the video is playing or not
     * 
     */
    async validateVideoPlaying(){
        await browser.waitUntil(async () =>{
            return (await this.videoStatus.getText()) == 'NOW PLAYING' 
        }, {timeout: 20000}
        );
        await expect(this.videoStatus).toHaveText('NOW PLAYING');
    }

    /**
     * methos to pause the video
     */

    async pauseVideo(){
        await this.pauseIcon.waitForExist({timeout:Constants.fiftySec});
        await this.pauseIcon.click();
    }

    /**
     * Verify if the pause is clicked or not
     */
    async validatePause() {
        await this.playIcon.waitForDisplayed({timeout:Constants.twentySec});
        await expect (this.playIcon).toBeDisplayed();
    }
    /**
     * Verify if the other video list is displayed or not
     */

    async validateRecommendedVideos() {
        await expect (this.recommendedSection).toBeDisplayed();
    }
      
      
}

module.exports = new VideoPage();
