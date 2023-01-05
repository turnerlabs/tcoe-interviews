class VideoPage {
    get videoTitleDiv() {
        return $('.video-resource__headline');
    }

    get searchResultsModule() {
        return $('.search__results');
    }

    async assertVideoTitle(videoTitle) {
        return await expect(this.videoTitleDiv).toHaveText(videoTitle)
    };

    async waitForResultsBeDisplayed() {
        return await this.searchResultsModule.waitForDisplayed({ timeout: 10000 });
    }
}

module.exports = new VideoPage();
