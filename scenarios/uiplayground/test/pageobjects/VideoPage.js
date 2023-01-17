
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

    async validateVideo() {
        await this.videoTitle.waitForDisplayed({timeout:Constants.twentySec});
        await expect(this.videoTitle).toBeDisplayed();
        await this.playButton.waitForClickable({timeout:Constants.twentySec});
        await expect(this.playButton).toBeDisplayed();
    }

    async playVideo() {
        await this.playButton.waitForClickable({timeout:Constants.twentySec});
        await this.playButton.click();
    }

    async validateAdvertisement() {
        await this.advertisementDiv.waitForDisplayed({timeout:Constants.sixtySec});
        await expect(this.advertisementDiv).toBeDisplayed();
        if( await this.buttonTermsOfClose.isExisting()) {
            await this.buttonTermsOfClose.click();
        }
    }

    async validateVideoPlaying(){
        await browser.waitUntil(async () =>{
            return (await this.videoStatus.getText()) == 'NOW PLAYING' 
        }, {timeout: 20000}
        );
        await expect(this.videoStatus).toHaveText('NOW PLAYING');
    }

    async pauseVideo(){
        await this.pauseIcon.waitForExist({timeout:Constants.fiftySec});
        await this.pauseIcon.click();
    }

    async validatePause() {
        await this.playIcon.waitForDisplayed({timeout:Constants.twentySec});
        await expect (this.playIcon).toBeDisplayed();
    }

    async validateRecommendedVideos() {
        await expect (this.recommendedSection).toBeDisplayed();
    }
      
      
}

module.exports = new VideoPage();
