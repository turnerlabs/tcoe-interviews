const Page = require('./Page.js');
const GenericActions = require('../helpers/GenericActions.js');

class Entertainment extends Page {

    get playButton() {
        return $('.play-icon');
    }

    get adTitle() {
        return $('.tui-ad-slate__countdown');
    }

    get videoContainer() {
        return $('.sc-kkGfuU');
    }

    get videoDuration() {
        return $('.sc-jqCOkK > span:last-child');
    }

    get allRelatedVideos() {
        return $$('.video-playlist__outer-container .video-resource .video-resource__headline');
    }

    get secondRelatedVideo() {
        return $('.video-playlist__outer-container .video-resource:nth-child(2) .video-resource__headline');
    }

    get videoTitle() {
        return $('.video-resource__details--leaf .video-resource__headline');
    }

    async open() {
        return await super.open('videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn');
    }

    async clickOnPlayButton() {
        await GenericActions.doClick(this.playButton);
    }

    async waitForAd() {
        await GenericActions.waitForIsShown(this.adTitle);
    }

    async waitForAdDisappearing() {
        await browser.waitUntil(
            async () => await this.adTitle.isDisplayed() === false,
            {
                timeout: 20000,
            }
        );
    }

    async moveMouseOverVideoContainer() {
        await GenericActions.moveMouseOver(this.videoContainer);
    }

    async getTextVideoDuration() {
        await GenericActions.waitForIsShown(this.videoDuration);
        return await this.videoDuration.getText();
    }

    async getRelatedVideosAmount() {
        await GenericActions.waitForIsShown(this.secondRelatedVideo);
        return await this.allRelatedVideos.length;
    }

    async getTextSecondRelatedVideo() {
        await GenericActions.waitForIsShown(this.secondRelatedVideo);
        return await this.secondRelatedVideo.getText();
    }

    async clickOnSecondRelatedVideo() {
        await GenericActions.doClick(this.secondRelatedVideo);
    }

    async getTextVideoTitle() {
        await GenericActions.waitForIsShown(this.videoTitle);
        return await this.videoTitle.getText();
    }
}

module.exports = new Entertainment();