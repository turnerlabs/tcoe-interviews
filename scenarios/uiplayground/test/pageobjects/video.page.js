class VideoPage {
    get videoTitleDiv() {
        return $('.video-resource__headline');
    };

    get videoDescriptionDiv() {
        return $('.video-resource__description');
    };

    get videoPlayDiv() {
        return $('div[title="Play"]');
    };

    get extendWindowVideoButton() {
        return $('.pui_control-bar_fullscreen-toggle');
    };

    get adTitleVideoDiv() {
        return $('.tui-ad-slate');
    };

    get videoStatus() {
        return $('.pui_metadata_status');
    };

    get recommendationSectionTitle() {
        return $('.video-playlist__info-headline');
    }

    get recommendationSection() {
        return $('.video-playlist__playlist-wrapper')
    };

    async assertVideoTitle(videoTitle) {
        return await expect(this.videoTitleDiv).toHaveText(videoTitle)
    };

    async assertVideoDescription(videoDescription) {
        return await expect(this.videoDescriptionDiv).toHaveText(videoDescription);
    };

    async assertPlayVideoIsDisplayed() {
        return await expect(this.videoPlayDiv).toBeDisplayed();
    };

    async clickAtPlayVideo() {
        return this.videoPlayDiv.click();
    };

    async assertPlayVideoDisappear() {
        return await expect(this.videoPlayDiv).not.toBeDisplayed();
    };

    async assertExpandVideoIsDisplayed() {
        return await expect(this.extendWindowVideoButton).toBeDisplayed();
    };

    async assertAdIsBeingDisplayed() {
        return await this.adTitleVideoDiv.waitForDisplayed();
    }

    async waitAdDisappear() {
        await this.adTitleVideoDiv.waitUntil(async function () {
            return (await this.getText()) === 'Ad:0'
        }, {
            timeout: 50000,
            timeoutMsg: 'expected to ad disappear'
        });
    };

    async assertVideoIsPlaying() {
        await this.videoStatus.moveTo();
        await this.videoStatus.waitUntil(async function () {
            return (await this.getText()) === 'NOW PLAYING'
        }, {
            timeout: 20000,
            timeoutMsg: 'expected video was playing'
        });
    };

    async assertRecommendSectionTitle(recommendationTitle) {
        await expect(this.recommentationSectionTitle).toHaveText(recommendationTitle)
    }

    async assertRecommendedVideosAreDisplayed() {
        await expect(this.recommendationSection).toBeDisplayed();
    };

}

module.exports = new VideoPage();
