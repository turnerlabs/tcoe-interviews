
const  Constants = require('../../support/Constants.json');
const VideoData = require('../../support/VideoData.json');
const fetch = require('node-fetch');

let initialTimeSpan , finalTimeSpan;
class VideoPage {
    /**
     * define selectors using getter methods
     */
    get videoTitle () {  return $('.video-resource__headline');    }

    get playButton () {  return $('//div[@title="Play"]/button');  }

    get buttonTermsOfClose() { return $('.terms-of-service__close-btn'); }

    //get pauseIcon() { return $('//div[@class="fave-player-container fave-top-player fave-no-mobile"]//button[contains(@class,"play")]')  }

    get playIcon() { return $('#playIconTitle'); }
    
    get pauseIconTitle() { return $('#pauseIconTitle'); }

    get buttonTogglePause_Play() { return $('//button[@class="pui_center-controls_big-play-toggle sc-iAyFgw cnBpEa"]'); }   

    get buttonForward() { return $('//button[@class="sc-gipzik pui_center-controls_seek-forward sc-bRBYWo bifSKa"]'); }   

    get buttonBackward() { return $('//button[@class="sc-jlyJG pui_center-controls_seek-backward sc-Rmtcm eggdgO"]'); }    
    
    get buttonNextVideo() { return $('//button[@class="sc-gipzik pui_center-controls_next sc-hzDkRC kIEEBE"]'); }    
   
    get buttonPreviousVideo() { return $('//button[@class="sc-jlyJG pui_center-controls_previous sc-csuQGl djxTeK"]'); }    

    get playbackTimeSpan() { return $('//div[@class="sc-gzVnrw pui_control-bar_playback-time sc-jqCOkK eOIrQv"]/span'); }     

    get buttonToggleFullScreen() { return $('//button[@class="sc-bbmXgH pui_control-bar_fullscreen-toggle sc-tilXH kBGqE"]'); } 
           
    get buttonSettings() { return $('//button[@class="sc-bbmXgH pui_control-bar_settings-toggle sc-fYxtnH gPtjFw"]'); } 

    get windowCollapseIconTitle() { return $('#windowCollapseIconTitle');}

    get windowExpandIconTitle() { return $('#windowExpandIconTitle');}    

    get advertisementDiv() {  return $('//div[@class="tui-ad-slate"]');   }

    get advertisementCountDown() {  return $('.tui-ad-slate__countdown');  }


    get videoStatus() {   return $('//div[contains(@class,"pui_metadata_status ")]');  }

    get mainVideoDiv() { return $('//div[@class="sc-gzVnrw pui sc-kkGfuU IAmeA"]');  }

    get recommendedSection() { return $$('//div[@class="video-playlist__items-container video-playlist__items-container--expanded"]/div');}

    /**
     *  To validate if the VideoTitle and Play button are displayed
     */

    async validateVideo() {
        await this.videoTitle.waitForDisplayed({timeout:Constants.twentySec});
        await expect(this.videoTitle).toBeDisplayed();
        await expect(this.videoTitle).toHaveText(VideoData.videoTitle);
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
        try{
            if( await this.buttonTermsOfClose.isExisting()) {
                 await this.buttonTermsOfClose.click();
            }
        }
        catch(ex){}
    }

    /**
     *  To validate if the video is playing or not
     * 
     */
    async validateVideoPlaying(){ 
        await this.videoStatus.waitForExist({timeout: Constants.sixtySec});
        await this.videoStatus.waitUntil(async () =>{
            return (await this.videoStatus.getText()) == 'NOW PLAYING' 
        }, {timeout: Constants.twentySec}
        );
            await browser.pause(Constants.three);
            await this.pauseVideo();
            const getInitialTimestamp = await this.getPlaybackTime();           
            await this.playAndPauseClick();
            await browser.pause(Constants.three);
            const getFinalTimestamp = await this.getPlaybackTime();
            console.log(getInitialTimestamp);
            console.log(getFinalTimestamp);
            expect(getFinalTimestamp - getInitialTimestamp).toBeGreaterThanOrEqual(1);
    }


    /**
     *  To click FullScreen  button 
     */

      async clickFullScreenMode() {
        if( await this.mainVideoDiv.isExisting()) {
            await this.mainVideoDiv.moveTo();
            await this.buttonToggleFullScreen.waitForClickable({timeout:Constants.twentySec});
            await this.buttonToggleFullScreen.click();
        }
    }

    /**
     *  To validate if full screen mode is on
     */

    async validateFullScreenMode() {
        await this.windowCollapseIconTitle.waitForExist({timeout:Constants.twentySec});
        expect(await this.windowCollapseIconTitle).toHaveText('Exit Fullscreen');
    }


    
    /**
     *  To validate if window is not in  full screen mode 
     */

    async validateExitFullScreenMode() {
        await this.windowExpandIconTitle.waitForExist({timeout:Constants.twentySec});
        expect(await this.windowExpandIconTitle).toHaveText('Fullscreen');
    }

    /**
     * methos to pause the video
     */

    async pauseVideo(){
        if( await this.mainVideoDiv.isExisting()) {
            await this.mainVideoDiv.moveTo();
            await this.playAndPauseClick();
        }       
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
    /**
     *  Click the toggle Play and Pause button after mouse hover
     */
    async playAndPauseClick(){
        await this.buttonTogglePause_Play.scrollIntoView();
        await this.buttonTogglePause_Play.click();
    }
      
     /**
     * Verify if the paused Video  is played or not
     */
    async validatePlayingPausedVideo() {
        await this.pauseIconTitle.waitForDisplayed({timeout:Constants.twentySec});
        expect (await this.pauseIconTitle).toBeDisplayed();
    }

    /**
     *  to capture the time of the playing video
     * @returns  time in seconds
     */
    async getPlaybackTime() {
        const timeStr = await this.playbackTimeSpan.getText();
        const timeStrArr = timeStr.split(':');
        const totalTime = parseInt(timeStrArr[0]) * 60 + parseInt(timeStrArr[1]);
        return (totalTime);        
    }

    /**
     * click on forward button
     */
    async clickForward() {
        initialTimeSpan =  await this.getPlaybackTime();
        await this.buttonForward.scrollIntoView();
        await this.buttonForward.click();
        finalTimeSpan = await this.getPlaybackTime();
    }

    /**
     * click on backward button
     */
    async clickBackward() {
        initialTimeSpan =  await this.getPlaybackTime();
        await this.buttonBackward.scrollIntoView();
        await this.buttonBackward.click();
        finalTimeSpan = await this.getPlaybackTime();
    }

    /**
     *  To validate if the forward button has the 10 sec times span
     * 
     */
    async validateForward() {
        expect(finalTimeSpan-initialTimeSpan).toBeGreaterThanOrEqual(10);
    }

     /**
     *  To validate if the backward button has the 10 sec times span
     * 
     */
    async validateBackward() {
        expect(initialTimeSpan-finalTimeSpan).toBeGreaterThanOrEqual(10);
    }

     /**
     *  click on next button for the next video
     */
    async clickNextVideo() {
        await this.buttonNextVideo.scrollIntoView();
        await this.buttonNextVideo.click();
    }

    /**
     *  To validate if the next video is playing or not
     * 
     */
       async validateNextVideoIsPlaying(){
        await this.validateVideoPlaying();
        expect(await this.videoTitle).toHaveText(VideoData.nextVideoTitle);
    }

    /**
     *  click on previous button for the previuous video
     */
    async clickPreviousVideo() {
        if( await this.mainVideoDiv.isExisting()) {
            await this.mainVideoDiv.moveTo();
            await this.buttonPreviousVideo.scrollIntoView();
            await this.buttonPreviousVideo.click();       
        }  
    }

    /**
     *  To validate if the previuos  video is playing or not
     * 
     */
       async validatePreviousVideoIsPlaying(){
        await this.validateVideoPlaying();
        expect(await this.videoTitle).toHaveText(VideoData.videoTitle);
    }
}

module.exports = new VideoPage();
