const { expect } = require("chai");
const BaseURL = require("./BaseURL");

const START_PLAY_ICON = '//button[@class="pui_center-controls_big-play-toggle sc-iAyFgw cnBpEa"]//*[@class= "play-icon"]' //xPath of play icon at start point of page
const SPINNER = '//div[@class="sc-iRbamj iVfNbr"]' //xPath to find loading spinner
const AD_DIV = '//div[@class="tui-clickthrough-overlay"]' //xPath to find AD Div
const AD_DIV_DISABLED = '//div[@class="tui-clickthrough-overlay tui-clickthrough-overlay__disabled"]' //xPath to find disabled ad div
const AD_DIV1 = '//div[@class="tui-ad-slate"]' //xPath to find AD Div
const AD_COUNTDOWN = '//div[@class="tui-ad-slate__countdown"]' //xPath to find Ad countdown
const AD_PLAY_BTN = '//*[@class="play-icon"]' //xPath to find Ad play button
const AD_PAUSE_BTN = '//*[@class="pause-icon"]' //xPath to find Ad pause button
const AD_PROGRESS_BAR = '//div[@aria-label="Progress bar"]' //xPath to find Ad progres bar
const AD_MUTE_BTN = '//div[@class="sc-gzVnrw pui_control-bar sc-jhAzac ktRndm"]//*[@class="sound-full-icon"]' //Mute button in ad
const AD_UNMUTE_BTN = '//div[@class="sc-gzVnrw pui_control-bar sc-jhAzac ktRndm"]//*[@class="sound-mute-icon"]' //UNMUTE BUTTON IN AD
const AD_FULLSCREEN_BTN = '//button[@class="sc-bbmXgH pui_control-bar_fullscreen-toggle sc-tilXH kBGqE"]//*[@class="window-expand-icon"]' //Full screen button in ad div
const AD_COLLAPSE_BTN = '//button[@class="sc-bbmXgH pui_control-bar_fullscreen-toggle sc-tilXH kBGqE"]//*[@class="window-collapse-icon"]' //Fullscreen button
const VIDEO_TITLE  = '//div[@class="pui_metadata_title sc-cMljjf hAsuJs"]' //Video Title
const VIDEO_PLAY_BTN = '//button[@class="pui_center-controls_big-play-toggle sc-iAyFgw cnBpEa"]//*[@class="play-icon"]' //Play button in video
const VIDEO_PAUSE_BTN = '//button[@class="pui_center-controls_big-play-toggle sc-iAyFgw cnBpEa"]//*[@class="pause-icon"]' //Pause button in video
const VIDEO_UNMUTE_BTN = '//*[@class="sound-mute-icon"]' //Mute button in video player
const VIDEO_MUTE_BTN = '//*[@class="sound-full-icon"]' //Unmute button in video player
const VIDEO_PROGRESS_BAR = '//div[@class="pui_progress-bar--content sc-fMiknA fDWbUI"]' //Video Progress Bar
const CC_OFF_ICON = '//*[@class="cc-off-icon"]' //CC will on
const CC_ON_ICON = '//*[@class="cc-on-icon"]' //CC will off
const CC_TEXT = '//*[@class="cc-renderer-cue"]' //CC text on clicking CC on
const VIDEO_FULLSCREEN = '//*[@class="window-expand-icon"]' //Fullscreen icon
const VIDEO_COLLAPSE = '//*[@class="window-collapse-icon"]' //Collapse screen
const SETTINGS_OFF = '//*[@class="settings-line-icon"]' //Settings are off 
const SETTINGS_ON = '//*[@class="settings-solid-icon"]' //Settings are on
const SUBTITLE_SETTINGS = '//*[text()="Subtitle Settings"]' //Subtitle settings
const SPEED = '//*[text()="Speed"]' //Speed settings


class VideoPage extends BaseURL {

    async openURL() {
        await browser.maximizeWindow() //Maximize window 
        return super.open('videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn')
    }

    async waitAndclickPlay() {
        await $(START_PLAY_ICON).waitForDisplayed({ timeout: 60000 })
        await $(START_PLAY_ICON).click()
    }

    async waitForSpinnerToBeDisappeared() {
        await $(SPINNER).waitForDisplayed({ reverse: true, timeout: 60000 })
    }

    async validateVideoPlayer(){
        
        await $(VIDEO_PROGRESS_BAR).waitForDisplayed() //wait for progress bar
        await $(VIDEO_PAUSE_BTN).waitForDisplayed() //wait for main video pause button
        await $(VIDEO_PAUSE_BTN).click() //Click pause
        expect (await $(VIDEO_PAUSE_BTN).isDisplayed()).to.be.false; //Pause button is expected to disappear
        
        expect (await $(VIDEO_PLAY_BTN).isDisplayed()).to.be.true; //Play button should be on screen
        await $(VIDEO_PLAY_BTN).click() //Click Play
        expect (await $(VIDEO_PLAY_BTN).isDisplayed()).to.be.false;// Play is expected to disappear

        expect (await $(VIDEO_MUTE_BTN).isDisplayed()).to.be.true;
        await $(VIDEO_MUTE_BTN).click()
        expect (await $(VIDEO_MUTE_BTN).isDisplayed()).to.be.false;

        expect (await $(VIDEO_UNMUTE_BTN).isDisplayed()).to.be.true;
        await $(VIDEO_UNMUTE_BTN).click()
        expect (await $(VIDEO_UNMUTE_BTN).isDisplayed()).to.be.false;

        expect (await $(CC_OFF_ICON).isDisplayed()).to.be.true;
        await $(CC_OFF_ICON).click()

        await $(CC_TEXT).waitForDisplayed()
        expect (await $(CC_TEXT).isDisplayed()).to.be.true;

        expect (await $(CC_ON_ICON).isDisplayed()).to.be.true;
        await $(CC_ON_ICON).click()
        expect (await $(CC_ON_ICON).isDisplayed()).to.be.false;

        expect (await $(CC_TEXT).isDisplayed()).to.be.false;

        expect (await $(VIDEO_FULLSCREEN).isDisplayed()).to.be.true;
        await $(VIDEO_FULLSCREEN).click()
        expect (await $(VIDEO_FULLSCREEN).isDisplayed()).to.be.false;

        expect (await $(VIDEO_COLLAPSE).isDisplayed()).to.be.true;
        await $(VIDEO_COLLAPSE).click()
        expect (await $(VIDEO_COLLAPSE).isDisplayed()).to.be.false;

        expect (await $(SETTINGS_OFF).isDisplayed()).to.be.true;
        await $(SETTINGS_OFF).click()
        await $(SETTINGS_ON).waitForDisplayed()
        expect (await $(SETTINGS_OFF).isDisplayed()).to.be.false;

        expect (await $(SETTINGS_ON).isDisplayed()).to.be.true;
        await $(SUBTITLE_SETTINGS).waitForDisplayed()
        expect (await $(SUBTITLE_SETTINGS).isDisplayed()).to.be.true; //Settings should be on screen 
        expect (await $(SPEED).isDisplayed()).to.be.true; //Speed should be in settings div

        await $(SETTINGS_ON).click()
    }

    get adDiv(){
        return $(AD_DIV1)
    }

    get adPauseButton(){
        return $(AD_PAUSE_BTN)
    }

    get adPlayButton(){
        return $(AD_PLAY_BTN)
    }

    get adMuteButton(){
        return $(AD_MUTE_BTN)
    }

    get adUnmuteButton(){
        return $(AD_UNMUTE_BTN)
    }

    get adFullScreenBtn(){
        return $(AD_FULLSCREEN_BTN)
    }

    get adCollapseButton(){
        return $(AD_COLLAPSE_BTN)
    }

    get adProgressBar(){
        return $(AD_PROGRESS_BAR)
    }

    get adCountDown(){
        return $(AD_COUNTDOWN)
    }

    get videoTitle(){
        return $(VIDEO_TITLE)
    }

    get disabledAdDiv(){
        return $(AD_DIV_DISABLED)
    }

}

module.exports = new VideoPage();
