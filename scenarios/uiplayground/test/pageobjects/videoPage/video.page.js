const Page = require('./../page');

class VideoPage extends Page {

    /**
    * define selectors using getter methods
    */
    get videoPlayButton() { return $('button[class="cnBpEa"]'); }
    get videoTitle() { return $('h1'); }
    get videoDescription() { return $('div[class=""media__video-description--inline]'); }
    get trendingVideos() { return $('#cn-current_video_collection') }

    // create video functionality
    playVideo() {
        this.videoPlayButton.click();
        this.videoTitle.waitForDisplayed();
        this.videoDescription.waitForDisplayed();
        this.trendingVideos.waitForDisplayed();
    }

    open() {
        super.open('videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn')
    }
}

module.exports = new VideoPage();